package users

import (
	"strings"

	"../../utils/errors/"
)

type User struct {
	ID        int64  `json:"ID"`
	Firstname string `json:"first_name"`
	Lastname  string `json:"last_name"`
	Password  string `json:"password"`
	Email     string `json:"email"`
	Tel       string `json:"tel"`
}

func (user *User) Validate() *errors.RestErr {
	user.Firstname = strings.TrimSpace(user.Firstname)
	user.Lastname = strings.TrimSpace(user.Lastname)
	user.Email = strings.TrimSpace(user.Email)
	user.Tel = strings.TrimSpace(user.Tel)

	if user.Email == "" {
		return errors.NewBadRequestError("กรุณาอีเมล์")
	}

	if user.Password == "" {
		return errors.NewBadRequestError()
	}
}
