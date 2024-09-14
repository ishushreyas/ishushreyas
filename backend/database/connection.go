package database

import (
	"context"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var URI_STRING string
var mongoClient *mongo.Client

func init() {
	URI_STRING = os.Getenv("MONGODB_URI")
	if URI_STRING == "" {
		log.Println("Environment Variable Not Found ")
		URI_STRING = "mongodb+srv://global:1lIkisCphT8WZSJC@cluster0.zvhjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
	} else {
		log.Println("Environment variable found")
	}
}

func Connect() (error) {
	serveAPI := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(URI_STRING).SetServerAPIOptions(serveAPI)

	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		panic(err)
	}

	defer func() {
		if err := client.Disconnect(context.TODO()); err != nil {
			panic(err)
		}
	}()

	err = client.Ping(context.TODO(), nil)
	mongoClient = client
	return err
}

func GetCollection(c string) *mongo.Collection {
	return mongoClient.Database("ishushreyas").Collection(c)
}