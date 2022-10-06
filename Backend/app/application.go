package app

import (
	// "../routes/"
	"github.com/gin-gonic/gin"
)

var (
	router = gin.Default()
)

func StartApplication() {
	router.mapUrls()
	router.Run(":8081")
}
