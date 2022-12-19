package routes

import (
	AuthController "Backend/api/controllers/auth"
	ProductController "Backend/api/controllers/product"
	UserController "Backend/api/controllers/user"
	"Backend/api/middleware"
	GoogleServices "Backend/api/services/auth"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

var session_id = os.Getenv("SESSION_ID")

func Router() {
	r := gin.Default()
	var store = cookie.NewStore([]byte(session_id))
	r.Use(sessions.Sessions("session", store))

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"DELETE", "POST", "GET", "OPTIONS", "PUT"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == os.Getenv("ENDPOINT_URL")
		},
		MaxAge: 12 * time.Hour,
	}))
	// r.Use(cors.Default())

	r.POST("/api/auth/register", AuthController.Register)

	auth := r.Group("/api/auth", middleware.JWTAuthentication())
	{
		auth.GET("/logout", AuthController.Logout)
		auth.GET("/google-login", GoogleServices.Test)
		auth.POST("/api/auth/login", AuthController.Login)
	}

	authorized := r.Group("/api/users", middleware.JWTAuthentication())
	{
		authorized.GET("/get/:id", UserController.GetUserById)
		authorized.GET("/profile", UserController.Profile)
		authorized.GET("/read", UserController.GetUser)
	}

	product := r.Group("/api/product", middleware.JWTAuthentication())
	{
		product.GET("/read", ProductController.ReadProduct)
		product.POST("/add", ProductController.AddProduct)
		product.GET("/get/:id", ProductController.GetProductById)
		product.PUT("/update/:id", ProductController.UpdateProduct)
		product.DELETE("/delete/:id", ProductController.Delete)
	}

	r.Run("localhost:6476")
}
