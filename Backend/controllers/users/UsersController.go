package users

import (
	"../../domain/users/"
	"../../services/"
	"../../utils/errors/"
	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	var user users.User

	if err := c.ShouldBindJSON(&user); err != nil {
		err := errors.NewBadRequestError("Invalid json body")
		c.JSON(err.Status, err)
		return
	}

	services.CreateUser(user)
}
