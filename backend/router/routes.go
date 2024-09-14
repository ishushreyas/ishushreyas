package router

import (
	"net/http"
	"ishushreyas/backend/controllers"
)

func SetUpRoutes() *http.ServeMux {
	mux := http.NewServeMux()

	mux.HandleFunc("/contact", controllers.RequestContact)
	mux.HandleFunc("/content", controllers.GetBlogPostById)
	mux.HandleFunc("/contents", controllers.ListAllBlogPosts)

	return mux
}