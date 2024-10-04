package controllers

import (
	"context"
	"ishushreyas/backend/database"
	"ishushreyas/backend/models"
	"log"
	"net/http"
	"time"

	"cloud.google.com/go/storage"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var blogCollection *mongo.Collection = database.GetCollection(database.DB, "blog")

func ListAllBlogPosts(w http.ResponseWriter, r *http.Request) {
    cursor, err := blogCollection.Find(context.Background(), bson.D{}, options.Find().SetSort(bson.D{{"createdAt", -1}}))
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer cursor.Close(context.Background())

    var blogs []models.BlogPost
    if err := cursor.All(context.Background(), &blogs); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

	for i := range blogs {
		blogs[i].Image, _ = generateImageUrl(blogs[i].Image)
	}

	data := map[string]interface{} {
		"message": "Blog Posts",
		"data":    blogs,
		"code":    0,
	}

	// Ensure that the response is sent correctly
	if err := SendJSONResponse(w, http.StatusOK, data); err != nil {
		log.Printf("Error sending JSON response: %v", err)
	}
}

func GetBlogPostById(w http.ResponseWriter, r *http.Request) {
	blogId, err := primitive.ObjectIDFromHex(r.URL.Query().Get("id"))
	if err != nil {
		log.Printf("Invalid Post ID: %v", err)
		http.Error(w, "Invalid Post ID", http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var blogPost models.BlogPost
	err = blogCollection.FindOne(ctx, bson.M{"_id": blogId}).Decode(&blogPost)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			log.Printf("Post not found: %v", err)
			http.Error(w, "Post Not Found", http.StatusNotFound)
		} else {
			log.Printf("Error finding blog post: %v", err)
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		}
		return
	}

	blogPost.Image, err = generateImageUrl(blogPost.Image)
	if err != nil {
		log.Fatalf("err generate url %v", err.Error())
	}

	data := map[string]interface{}{
		"message": "Blog Found",
		"data":    blogPost,
		"code":    0,
	}

	if err := SendJSONResponse(w, http.StatusOK, data); err != nil {
		log.Printf("Error sending JSON response: %v", err)
	}
}

func generateImageUrl(fileName string) (string, error) {
	opts := &storage.SignedURLOptions{
		Scheme: storage.SigningSchemeV4,
		Method: "GET",
		Expires: time.Now().Add(15 * time.Minute),
	}
	url, err := database.StorageClient.Bucket("ishu-shreyas.appspot.com").SignedURL(fileName, opts)
	return url, err
}
