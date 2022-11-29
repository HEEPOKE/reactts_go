package user

import (
	"Backend/api/config"
	"Backend/api/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetUser(c *gin.Context) {
	header := c.Request.Header.Get("Authorization")
	var users []models.User
	config.DB.Find(&users)
	c.JSON(http.StatusOK, gin.H{
		"header":  header,
		"status":  "ok",
		"message": "success",
		"users":   users,
	})
}

func GetUserById(c *gin.Context) {
	header := c.Request.Header.Get("Authorization")
	id := c.Param("id")
	var user []models.User
	config.DB.First(&user, id)
	c.JSON(http.StatusOK, gin.H{
		"header":  header,
		"status":  "ok",
		"message": "success",
		"users":   user,
	})
}

func Profile(c *gin.Context) {
	header := c.Request.Header.Get("Authorization")
	userId := c.MustGet("userId").(float64)
	var user []models.User
	config.DB.First(&user, userId)
	c.JSON(http.StatusOK, gin.H{
		"header":  header,
		"status":  "ok",
		"message": "success",
		"users":   user,
	})
}
