package users

import (
	"fmt"

	"../../database/"
	"../../utils/errors/"
)

var (
	queryInsertUser        = "INSERT INTO users (first_name, last_name, email, password, tel) VALUES (?, ?, ?, ?, ?);"
	queryInsertUserByEmail = "SELECT id, first_name, last_name, email, password, tel FROM users WHERE email=?;"
	queryInsertGetUserByID = "SELECT id, first_name, last_name, email, tel FROM users WHERE id=?;"
)

func (user *User) Save() *errors.RestErr {
	stmt, err := database.Client.Prepare(queryInsertUser)
	if err != nil {
		errors.NewBadRequestError("database error")
	}
	defer stmt.Close()

	insertResult, saveErr := stmt.Exec(user.Firstname, user.Lastname, user.Email, user.Password, user.Tel)
	if saveErr != nil {
		fmt.Println(saveErr)
		return errors.NewInternalServerError("database error")
	}

	userID, err := insertResult.LastInsertId()
	if err != nil {
		return errors.NewInternalServerError("database error")
	}

	user.ID = userID
	return nil
}

func (user *User) GetByEmail() *errors.RestErr {
	stmt, err := database.Client.Prepare(queryInsertUserByEmail)
	if err != nil {
		return errors.NewInternalServerError("invalid email")
	}
	defer stmt.Close()

	result := stmt.QueryRow(user.Email)
	if getErr := result.Scan(&user.ID, &user.Firstname, &user.Lastname, &user.Email, &user.Password, &user.Tel); getErr != nil {
		return errors.NewInternalServerError("database error")
	}
	return nil
}

func (user *User) GEtByID() *errors.RestErr {
	stmt, err := database.Client.Prepare(queryInsertGetUserByID)
	if err != nil {
		return errors.NewInternalServerError("database error")
	}
	defer stmt.Close()

	result := stmt.QueryRow(user.ID)
	if getErr := result.Scan(&user.ID, &user.Firstname, &user.Lastname, &user.Email, &user.Tel); getErr != nil {
		return errors.NewInternalServerError("database error")
	}
	return nil
}
