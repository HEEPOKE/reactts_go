package models

import (
	"gorm.io/gorm"
)

type Product struct {
	gorm.Model
	Name     string
	Category string
	Color    string
	Price    uint
}
