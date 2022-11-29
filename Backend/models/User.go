package models

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Id       int64  `json:"id" binding:"required"`
	Username string `json:"username" binding:"required"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
	Tel      string `json:"tel"`
	Role     string `json:"role"`
}
