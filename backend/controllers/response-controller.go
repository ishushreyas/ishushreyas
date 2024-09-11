package controllers

import (
	"encoding/json"
	"net/http"
)

func SendJSONResponse(w http.ResponseWriter, s int, m map[string]interface{}) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(s)
	if err := json.NewEncoder(w).Encode(m); err != nil {
		return err
	}
	return nil
}