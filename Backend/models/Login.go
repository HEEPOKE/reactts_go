package models

import "gorm.io/gorm"

type Login struct {
	gorm.Model
	Email    string `json:"email"`
	Password string `json:"password"`
}
