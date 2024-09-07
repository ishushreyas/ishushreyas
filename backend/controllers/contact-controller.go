package controllers

import (
	"encoding/json"
	"ishushreyas/backend/models"
	"net/http"
)

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

	if err := SendContactJSON(w, http.StatusOK, contact); err != nil {
		http.Error(w, "Error parsing form details.", http.StatusBadRequest)
	}
}