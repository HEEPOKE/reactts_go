package auth

import (
	"Backend/api/config"
	"Backend/api/models"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
)

const SecretKey = "secret"

var hmacSampleSecret []byte

func Register(c *gin.Context) {
	var json models.User
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	var userExist models.User
	config.DB.Where("email = ?", json.Email).First(&userExist)
	if userExist.ID > 0 {
		c.JSON(http.StatusOK, gin.H{
			"message": "Fail",
			"status":  "Error",
		})
		return
	}
	encryptedPassword, _ := bcrypt.GenerateFromPassword([]byte(json.Password), 10)
	user := models.User{
		Username: json.Username,
		Password: string(encryptedPassword),
		Email:    json.Email,
		Tel:      json.Tel,
		Role:     json.Role,
	}
	config.DB.Create(&user)
	if user.ID > 0 {
		c.JSON(http.StatusOK, gin.H{
			"status":  "Success",
			"message": "Success",
			"userId":  user.ID,
		})
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status":  "Error",
			"message": "Fail",
		})
	}
}

func Login(c *gin.Context) {
	var json models.User
	if err := c.ShouldBindJSON(&json); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":  err.Error(),
			"status": "Error",
		})
		return
	}
	var userExist models.User
	config.DB.Where("email = ?", json.Email).First(&userExist)
	if userExist.ID == 0 {
		c.JSON(http.StatusOK, gin.H{
			"status":  "Error",
			"message": "อีเมล์นี้ยังไม่ได้ทำการสมัครสมาชิก",
		})
		return
	}
	err := bcrypt.CompareHashAndPassword([]byte(userExist.Password), []byte(json.Password))
	if err == nil {
		hmacSampleSecret = []byte(os.Getenv("JWT_SECRET_KEY"))
		expire := time.Now().Add(time.Minute * 60).Unix()
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"userId":   userExist.ID,
			"username": userExist.Username,
			"email":    userExist.Email,
			"tel":      userExist.Tel,
			"role":     userExist.Role,
			"exp":      expire,
		})
		tokenString, err := token.SignedString(hmacSampleSecret)
		fmt.Println(tokenString, err)
		c.JSON(http.StatusOK, gin.H{
			"status":       "Ok",
			"message":      "Login Success",
			"access_token": tokenString,
			"exp":          expire,
		})
		return
	} else {
		c.JSON(http.StatusOK, gin.H{
			"status":  "Error",
			"message": "Login Failed",
		})
		return
	}
}

func Logout(c *gin.Context) {
	bearerToken := c.Request.Header.Get("Authorization")
	if bearerToken == "" {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "Fail",
			"message": "Token is missing",
		})
		return
	}
	c.SetCookie("jwt", "", -1, "", "", false, true)
	c.JSON(http.StatusOK, gin.H{
		"status":  "Success",
		"message": "Logout Success",
	})
	// c.Redirect(http.StatusFound, os.Getenv("ENDPOINT_URL")+"/auth/login")
}
