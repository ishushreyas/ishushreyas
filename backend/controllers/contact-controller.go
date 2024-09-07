package controllers

import (
	"encoding/json"
	"fmt"
	"ishushreyas/backend/models"
	"net/http"
)

func RequestContact(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost{
		http.Error(w, "Method Not Allowed", http.StatusMethodNotAllowed)
		return
	}

	var contact models.Contact

	err := json.NewDecoder(r.Body).Decode(&contact)
	if err != nil {
		http.Error(w, "Invalid Input", http.StatusBadRequest)
		return
	}

	fmt.Fprintf(w, "Name: %s, Email: %s, Message: %s", contact.Name, contact.Email, contact.Message)
}