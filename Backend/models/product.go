package models

import (
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Name     string `json:"name" binding:"required"`
	Category string `json:"category" binding:"required"`
	Color    string `json:"color" binding:"required"`
	Price    uint   `json:"price" binding:"required"`
}
