package models

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	name  string
	price uint
}
