package database

import (
	"context"
	"fmt"
	"ishushreyas/backend/configs"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Connect() *mongo.Client  {
    client, err := mongo.NewClient(options.Client().ApplyURI(configs.LoadEnv("MONGOURI")))
    if err != nil {
        log.Fatal(err)
    }

    ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
    err = client.Connect(ctx)
    if err != nil {
        log.Fatal(err)
    }

    //ping the database
    err = client.Ping(ctx, nil)
    if err != nil {
        log.Fatal(err)
    }
    fmt.Println("Connected to MongoDB")
    return client
}

//Client instance
var DB *mongo.Client = Connect()

//getting database collections
func GetCollection(client *mongo.Client, collectionName string) *mongo.Collection {
    collection := client.Database("ishushreyas").Collection(collectionName)
    return collection
}