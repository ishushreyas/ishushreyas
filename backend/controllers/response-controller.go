package controllers

import (
	"encoding/json"
	"ishushreyas/backend/models"
	"net/http"
)

func SendContactJSON(w http.ResponseWriter, s int, c models.Contact) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(s)
	if err := json.NewEncoder(w).Encode(c); err != nil {
		return err
	}
	return nil
}