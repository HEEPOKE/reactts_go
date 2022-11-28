package models

import "gorm.io/gorm"

type Error struct {
	gorm.Model
	Message string `json:"message"`
	Status  int    `json:"status"`
	Error   string `json:"error"`
}
