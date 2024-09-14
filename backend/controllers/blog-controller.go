package controllers

import (
	"context"
	"ishushreyas/backend/database"
	"ishushreyas/backend/models"
	"log"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ListAllBlogPosts(w http.ResponseWriter, r *http.Request) {
	collection := database.GetCollection("blog")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Define the projection to return only the 'title' field
	filter := bson.M{} // Empty filter to fetch all documents
	projection := bson.M{"title": 1, "tags": 1, "_id": 0} // Only return title, exclude _id

	cursor, err := collection.Find(ctx, filter, options.Find().SetProjection(projection))
	if err != nil {
		log.Fatal(err)
	}
	var blogs []bson.M
	if err = cursor.All(ctx, &blogs); err != nil {
		log.Fatal(err)
	}

	data := map[string]interface{} {
		"message": "Blog Posts",
		"data": blogs,
		"code": 0,
	}
	
	// Return the titles
	SendJSONResponse(w, http.StatusAccepted, data)
}

func GetBlogPostById(w http.ResponseWriter, r *http.Request) {
	coll := database.GetCollection("blogs")

	blogId, _ := primitive.ObjectIDFromHex(r.URL.Query().Get("id"))
	var blogPost models.BlogPost
	err := coll.FindOne(context.TODO(), bson.M{"_id": blogId}).Decode(&blogPost)
	if err != nil {
		http.Error(w, "Post Not Found", http.StatusNotFound)
		return
	}

	data := map[string]interface{} {
		"message": "Blog Found",
		"data": blogPost,
		"code": 0,
	}

	SendJSONResponse(w, http.StatusAccepted, data)
}