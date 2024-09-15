package configs

import (
	"os"

	"github.com/joho/godotenv"
)

func EnvMongoURI() string {
    err := godotenv.Load()
    if err != nil {
        panic("env not found ")
    }

    return os.Getenv("MONGOURI")
}