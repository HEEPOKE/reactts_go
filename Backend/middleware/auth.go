package middleware

import (
	"Backend/api/models"
	errors "Backend/api/utils"

	"strings"

	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Id       int64  `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Tel      string `json:"tel"`
	Role     string `json:"role"`
}

func (user *User) Validate() *models.RestErr {
	user.Name = strings.TrimSpace(user.Name)
	user.Email = strings.TrimSpace(user.Email)
	if user.Email == "" {
		return errors.NewBadRequestError("invalid email address")
	}

	user.Password = strings.TrimSpace(user.Password)
	if user.Password == "" {
		return errors.NewBadRequestError("invalid password")
	}
	return nil
}
