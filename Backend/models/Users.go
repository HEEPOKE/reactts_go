package models

import (
	"time"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Name      string
	Firstname string
	Lastname  string
	Age       uint
	CreatedAt time
	UpdatedAt time.Time
	DeletedAt gorm.Dele
}
