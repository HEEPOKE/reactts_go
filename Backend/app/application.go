package app

import (
	// "Api/Backend/app/router/"

	"github.com/gin-gonic/gin"
)

var (
	router = gin.Default()
)

func StartApplication() {
	mapUrls()
	router.Run(":8081")
}
