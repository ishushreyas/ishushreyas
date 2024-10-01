package database

import (
	"context"
	"ishushreyas/backend/configs"
	"log"

	"cloud.google.com/go/storage"
	"google.golang.org/api/option"
)

var StorageClient *storage.Client

func StorageInit() {
	opt := option.WithCredentialsJSON([]byte(configs.LoadEnv("ServiceJSON")))
	var err error
	StorageClient, err = storage.NewClient(context.Background(), opt)
	if err != nil {
		log.Printf("eee storage %v", err.Error())
	}
}