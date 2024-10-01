package configs

import (
	"os"

	"github.com/joho/godotenv"
)

func LoadEnv(name string) string {
    // Load env only in development (optional)
    if os.Getenv("RAILWAY_ENVIRONMENT") == "" {
        err := godotenv.Load()
        if err != nil {
            panic("env not found in development")
        }
    }
    
    mongoURI := os.Getenv(name)
    if mongoURI == "" {
        panic("Var not found in environment variables")
    }
    
    return mongoURI
}
