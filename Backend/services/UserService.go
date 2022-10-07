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

func GetUser(user users.User) (*users.User, *errors.RestErr) {
	result := &users.User{Email: user.Email}

	if err := result.GetByEmail(); err != nil {
		return nil, err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(user.Password)); err != nil {
		return nil, errors.NewBadRequestError("failed to decrypt the password")
	}

	resultWp := &user.User{ID: result.ID, Firstname: result.Firstname, LastName: result.LastName, Email: result.Emai, Tel: result.Tel}
	return resultWp, nil
}

func GetUserByID(userId int64) (*users.User, *errors.RestErr) {
	result := &users.User{ID: userId}

	if err := result.GetUserByID(); err != nil {
		return nil, err
	}
	return result, nil
}
