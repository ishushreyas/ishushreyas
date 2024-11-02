package models

import (
    "go.mongodb.org/mongo-driver/bson/primitive"
    "time"
)

// ContentItem represents a single piece of content, either markdown or image
type ContentItem struct {
    Type string `bson:"type"` // "markdown" or "image"
    Data string `bson:"data"` // Markdown text or image URL
}

// BlogPost represents the structure of a blog post
type BlogPost struct {
    ID          primitive.ObjectID `bson:"_id,omitempty"` // MongoDB ID field
    Link        string             `bson:"link"`
    Title       string             `bson:"title"`          // Blog post title
    Image       string             `bson:"image"`          // Link for blog image
    Color       string             `bson:"color"`
    ContentItems []ContentItem      `bson:"contentItems"`   // Array of markdown and image content
    Author      string             `bson:"author"`         // Author's name
    Tags        []string           `bson:"tags,omitempty"` // Tags for categorization (optional)
    CreatedAt   time.Time          `bson:"createdAt"`      // Timestamp of creation
    UpdatedAt   time.Time          `bson:"updatedAt"`      // Timestamp of last update
}
