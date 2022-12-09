package user

import (
	"Backend/api/config"
	"Backend/api/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUser(c *gin.Context) {
	var users []models.User
	config.DB.Order("id").Find(&users)
	c.JSON(http.StatusOK, gin.H{
		"status":  "ok",
		"message": "success",
		"users":   users,
	})
}

func GetUserById(c *gin.Context) {
	id := c.Param("id")
	var user []models.User
	config.DB.First(&user, id)
	c.JSON(http.StatusOK, gin.H{
		"status":  "ok",
		"message": "success",
		"users":   user,
	})
}

func Profile(c *gin.Context) {
	userId := c.MustGet("userId").(float64)
	var user []models.User
	config.DB.First(&user, userId)
	c.JSON(http.StatusOK, gin.H{
		"status":  "ok",
		"message": "success",
		"users":   user,
	})
}
