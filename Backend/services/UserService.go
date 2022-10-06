package services

import (
	"os/user"

	"../domain/users/"
	"../utils/errors/"
	"golang.org/x/crypto/bcrypt"
)

func CreateUser(user user.User) (*users.User, *errors.RestErr) {

	if err := user.Validate(); err != nil {
		return nil, err
	}

	pwSlice, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	if err != nil {
		return nil, errors.NewBadRequestError("รหัสผ่านล้มเหลว")
	}

	user.Password = string(pwSlice[:])

	if err := user.Save(); err != nil {
		return nil, err
	}

	return &user, nil
}
