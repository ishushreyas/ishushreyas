package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/api/", func(w http.ResponseWriter, r *http.ResponseWriter){
		log.Print("Hello API")
	})
	log.Fatal(http.ListenAndSeeve(":8080", nil))
}