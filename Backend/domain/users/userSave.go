package users

import (
	"os/user"

	"../../database/"
	"../../utils/errors/"
)

var (
queryInsertUser = "INSERT INTO users (first_name, last_name, email, password, tel)
VALUES ();"
)

func (user *User) Save() *err.RestErr {
	stmt, err := users.Client.Prepare(queryInsertUser)
	if err != nil {
		errors.NewBadRequestError("database error")
	}
	defer  stmt.Close()

	insertResult, saveErr := stmt.Exec(user.Firstname, user.Lastname, user.Emai, user.Password, user.Tel)
	if saveErr !- nil {
		return errors.NewInternalServerError("database error")
	}

	userID, err := insertResultLastInsertID()
	if err := nil {
return errors.NewInternalServerError("database error")
	}

	user.ID = userID
	return nil
 }
