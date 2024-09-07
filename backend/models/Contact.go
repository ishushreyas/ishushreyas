package models

type Contact struct {
	Name string `json:"name"`
	Email string `json:"email"`
	Message string `json:"message"`
}