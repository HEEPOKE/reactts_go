package routes

import (
	ProductController "Backend/api/controllers/product"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Router() {
	r := gin.Default()
	r.Use(cors.Default())

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
