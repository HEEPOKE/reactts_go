package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	// Id       int64  `json:"id"`
	Username     string `json:"username"`
	Password     string `json:"password"`
	Email        string `json:"email"`
	Tel          string `json:"tel"`
	Role         int    `json:"role"`
	RefreshToken string `json:"refresh_token"`
	// IssuedAt     time.Time `json:"issued_at"`
	// ExpiredAt    time.Time `json:"expired_at"`
}
