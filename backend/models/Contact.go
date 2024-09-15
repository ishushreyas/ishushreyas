package models

import (
    "go.mongodb.org/mongo-driver/bson/primitive"
    "time"
)

// Contact represents the structure of a recieved contact request 
type Contact struct {
    ID        primitive.ObjectID `bson:"_id,omitempty"`  // MongoDB ID field
    Name      string             `bson:"name"`          // Name of user
    Email     string             `bson:"email"`        // Email of the user
    Message   string             `bson:"message"`         // Message by sender
    CreatedAt time.Time          `bson:"createdAt"`      // Timestamp of creation
}
