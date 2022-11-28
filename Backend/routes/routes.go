package routes

import (
	ProductController "Backend/api/controllers/product"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Router() {
	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{os.Getenv("ENDPOINT_URL")},
		AllowMethods:     []string{"GET", "POST"},
		AllowHeaders:     []string{"Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == os.Getenv("ENDPOINT_URL")
		},
		MaxAge: 12 * time.Hour,
	}))

	//auth
	auth := r.Group("/api/auth")
	{
		auth.GET("/login", ProductController.ReadProduct)
		auth.POST("/register", ProductController.Create)
	}

	// product
	product := r.Group("/api/product")
	{
		product.GET("/get", ProductController.ReadProduct)
		product.POST("/create", ProductController.Create)
		product.PUT("/edit/:id", ProductController.Edit)
		product.DELETE("/delete/:id", ProductController.Delete)
	}
	r.Run(":8080")
}
