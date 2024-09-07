package router

import (
	"net/http"
	"ishushreyas/backend/controllers"
)

func SetUpRoutes() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/contact", controllers.RequestContact)

	return mux
}