package models

import (
    "go.mongodb.org/mongo-driver/bson/primitive"
    "time"
)

// BlogPost represents the structure of a blog post
type BlogPost struct {
    ID        primitive.ObjectID `bson:"_id,omitempty"`  // MongoDB ID field
    Title     string             `bson:"title"`          // Blog post title
    Content   string             `bson:"content"`        // Main content of the blog post
    Author    string             `bson:"author"`         // Author's name
    Tags      []string           `bson:"tags,omitempty"` // Tags for categorization (optional)
    CreatedAt time.Time          `bson:"createdAt"`      // Timestamp of creation
    UpdatedAt time.Time          `bson:"updatedAt"`      // Timestamp of last update
}