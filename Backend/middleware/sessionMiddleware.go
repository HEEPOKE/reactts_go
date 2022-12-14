package middleware

import (
	"net/http"
	"os"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	gsessions "github.com/gorilla/sessions"
)

var session_id = os.Getenv("SESSION_ID")
var store = gsessions.NewCookieStore([]byte(session_id))

func SetSession() gin.HandlerFunc {
	store := cookie.NewStore([]byte(session_id))
	return sessions.Sessions("mysession", store)
}

func AuthSession() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		sessionID := session.Get(session_id)
		if sessionID == nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"status":  "Fail",
				"message": "กรุณาเข้าสู่ระบบ",
			})
			return
		}
		c.Next()

	}
}

func AuthRequired() gin.HandlerFunc {
	return func(c *gin.Context) {
		session := sessions.Default(c)
		u := session.Get(session_id)
		if u == nil {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
			c.Abort()
			return
		}
		c.Next()
	}
}

func SaveSession(c *gin.Context, userId uint) {
	session := sessions.Default(c)
	session.Set(session_id, userId)
	session.Save()
}

func ClearSession(c *gin.Context) {
	session := sessions.Default(c)
	session.Clear()
	session.Save()
}

func GetSession(c *gin.Context) uint {
	session := sessions.Default(c)
	sessionID := session.Get(session_id)
	if sessionID == nil {
		return 0
	}
	return sessionID.(uint)
}

func CheckSession(c *gin.Context) bool {
	session := sessions.Default(c)
	sessionID := session.Get(session_id)
	return sessionID != nil
}
