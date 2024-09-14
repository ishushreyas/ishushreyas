package configs

import (
	"os"

	"github.com/joho/godotenv"
)

func EnvMongoURI() string {
    err := godotenv.Load()
    if err != nil {
        return "mongodb+srv://global:RihSWQoM0gYx5YT8@cluster0.zvhjy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    }

    return os.Getenv("MONGOURI")
}