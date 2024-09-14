package configs

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func EnvMongoURI() string {
    err := godotenv.Load()
    if err != nil {
        log.Panicln("Error loading .env file")
    }

    return os.Getenv("MONGOURI")
}