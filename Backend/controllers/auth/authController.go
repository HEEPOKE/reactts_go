package auth

import (
	"Backend/api/config"
	session "Backend/api/middleware"
	"Backend/api/models"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-contrib/sessions"
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
		token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
			"userId": userExist.ID,
			"exp":    time.Now().Add(time.Minute * 60).Unix(),
		})
		tokenString, err := token.SignedString(hmacSampleSecret)
		session.SaveSession(c, userExist.ID)
		fmt.Println(tokenString, err)
		c.JSON(http.StatusOK, gin.H{
			"status":       "Ok",
			"message":      "Login Success",
			"user_id":      userExist.ID,
			"access_token": tokenString,
			"Session":      session.GetSession(c),
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
	c.SetCookie("jwt", "", -1, "", "", false, true)
	session := sessions.Default(c)
	session.Clear()
	user := session.Get(os.Getenv("SESSION_ID"))
	log.Println("logging out user:", user)
	if user == nil {
		log.Println("Invalid session token")
		return
	}
	session.Delete(os.Getenv("SESSION_ID"))
	if err := session.Save(); err != nil {
		log.Println("Failed to save session:", err)
		return
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  "Success",
		"message": "Logout Success",
	})
}

func GetSession(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": session.GetSession(c),
	})
}
