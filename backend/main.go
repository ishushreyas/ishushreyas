package main

import (
	"ishushreyas/backend/database"
	"ishushreyas/backend/router"
	"log"
	"net/http"
)

var SITE_URL = "https://ishushreyas.vercel.app"
func enableCors(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        // Allow only requests from frontend 
        origin := r.Header.Get("Origin")
        if origin == SITE_URL {
            w.Header().Set("Access-Control-Allow-Origin", origin)
            w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
            w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
        }

        // Handle preflight requests (OPTIONS)
        if r.Method == "OPTIONS" && origin == SITE_URL {
            w.WriteHeader(http.StatusOK)
            return
        }

        next.ServeHTTP(w, r)
    })
}

func main() {
    database.Connect()
	mux := router.SetUpRoutes()
	log.Fatal(http.ListenAndServe(":8080", enableCors(mux)))
}