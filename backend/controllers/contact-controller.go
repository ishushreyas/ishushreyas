package controllers

import (
	"context"
	"encoding/json"
	"ishushreyas/backend/database"
	"ishushreyas/backend/models"
	"log"
	"net/http"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
)

var contactCollection *mongo.Collection = database.GetCollection(database.DB, "contacts")

func RequestContact(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost{
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	var contact models.Contact

	if err := json.NewDecoder(r.Body).Decode(&contact); err != nil {
		http.Error(w, "Invalid Input", http.StatusBadRequest)
		return
	}

	contact.CreatedAt = time.Now()

	result, err := contactCollection.InsertOne(context.TODO(), contact)
	if err != nil {
		log.Fatalf("error : %v", err.Error())
	}

	response := map[string]interface{} {
		"message": "Thanks for your interest.",
		"data":    result,
		"code": 0,
	}

	if err := SendJSONResponse(w, http.StatusOK, response); err != nil {
		http.Error(w, "Error parsing form details.", http.StatusBadRequest)
	}
}