package configs

import (
	"os"

	"github.com/joho/godotenv"
)

func EnvMongoURI() string {
    // Load env only in development (optional)
    if os.Getenv("RAILWAY_ENVIRONMENT") == "" {
        err := godotenv.Load()
        if err != nil {
            panic("env not found in development")
        }
    }
    
    mongoURI := os.Getenv("MONGOURI")
    if mongoURI == "" {
        panic("MONGOURI not found in environment variables")
    }
    
    return mongoURI
}
