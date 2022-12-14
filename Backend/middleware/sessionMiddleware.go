package middleware

import (
	"net/http"
	"os"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

var session_id = os.Getenv("SESSION_ID")

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
