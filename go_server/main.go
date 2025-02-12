package main

import (
  "context"
  "encoding/json"
  "log"
  "net/http"
  "os"

  "github.com/joho/godotenv"
  "github.com/gorilla/mux"
  "github.com/jackc/pgx/v5/pgxpool"
)

type Contact struct {
  Name    string `json:"name"`
  Email   string `json:"email"`
  Subject string `json:"subject"`
  Message string `json:"message"`
}

func getEnv(v string) string {
	if os.Getenv("RENDER_SERVICE_ID") == "" { // (Render sets RENDER_SERVICE_ID in production)
		err := godotenv.Load()
		if err != nil {
			log.Println("env not found in RENDER development")
		}
	}
	envVar := os.Getenv(v)
	if envVar == "" {
		log.Printf("%s not found in environment variables", v)
	}

	return envVar
}

func main() {
  dbURL := getEnv("DATABASE_URL") 
  pool, err := pgxpool.New(context.Background(), dbURL)
  if err != nil {
    log.Fatal("Unable to connect to DB:", err)
  }
  defer pool.Close()

  r := mux.NewRouter()
  r.HandleFunc("/contact", func(w http.ResponseWriter, r *http.Request) {
    var contact Contact
    if err := json.NewDecoder(r.Body).Decode(&contact); err != nil {
      http.Error(w, "Invalid data", http.StatusBadRequest)
      return
    }
    _, err := pool.Exec(
      context.Background(),
      "INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4)",
      contact.Name, contact.Email, contact.Subject, contact.Message,
    )
    if err != nil {
      http.Error(w, "DB error", http.StatusInternalServerError)
      return
    }
    w.WriteHeader(http.StatusCreated)
  }).Methods("POST")

  http.Handle("/", r)
  log.Println("Server running on :8080")
  log.Fatal(http.ListenAndServe(":8080", nil))
}