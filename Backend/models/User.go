package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id       int64  `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Tel      string `json:"tel"`
	Role     string `json:"role"`
}
