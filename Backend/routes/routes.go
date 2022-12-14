package routes

import (
	AuthController "Backend/api/controllers/auth"
	ProductController "Backend/api/controllers/product"
	UserController "Backend/api/controllers/user"
	"Backend/api/middleware"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Router() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"DELETE", "POST", "GET", "OPTIONS", "PUT"},
		AllowHeaders:     []string{"Content-Type", "Origin", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == os.Getenv("ENDPOINT_URL")
		},
		MaxAge: 12 * time.Hour,
	}))
	// r.Use(cors.Default())

	auth := r.Group("/api/auth")
	{
		auth.POST("/register", AuthController.Register)
		auth.POST("/login", AuthController.Login)
		auth.GET("/logout", AuthController.Logout)
		// auth.GET("/google-login", GoogleServices.Test)
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
		product.GET("/get/:id", ProductController.GetProductById)
		product.POST("/add", ProductController.AddProduct)
		product.PUT("/update/:id", ProductController.UpdateProduct)
		product.DELETE("/delete/:id", ProductController.Delete)
	}

	r.Run("localhost:6476")
}
