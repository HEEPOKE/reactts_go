package routes

import (
	AuthController "Backend/api/controllers/auth"
	ProductController "Backend/api/controllers/product"
	UserController "Backend/api/controllers/user"
	"Backend/api/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Router() {
	r := gin.Default()
	// r.Use(cors.New(cors.Config{
	// 	AllowOrigins:     []string{os.Getenv("ENDPOINT_URL")},
	// 	AllowMethods:     []string{"GET", "POST"},
	// 	AllowHeaders:     []string{"Content-Type"},
	// 	ExposeHeaders:    []string{"Content-Length"},
	// 	AllowCredentials: true,
	// 	AllowOriginFunc: func(origin string) bool {
	// 		return origin == os.Getenv("ENDPOINT_URL")
	// 	},
	// 	MaxAge: 12 * time.Hour,
	// }))
	r.Use(cors.Default())

	auth := r.Group("/api/auth")
	{
		auth.POST("/login", AuthController.Login)
		auth.POST("/register", AuthController.Register)
		auth.GET("/logout", AuthController.Logout)
	}

	authorized := r.Group("/api/users", middleware.ValidationUsers())
	{
		authorized.GET("/get/:id", UserController.GetUserById)
		authorized.GET("/profile", UserController.Profile)
	}

	product := r.Group("/api/product")
	{
		product.GET("/read", ProductController.ReadProduct)
		product.POST("/add", ProductController.AddProduct)
		product.PUT("/update/:id", ProductController.Edit)
		product.DELETE("/delete/:id", ProductController.Delete)
	}

	r.GET("/api/read/users", UserController.GetUser)

	r.Run("localhost:6476")
}
