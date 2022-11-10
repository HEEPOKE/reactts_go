package product

import (
	"Backend/api/config"
	"Backend/api/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ReadProduct(c *gin.Context) {
	var product []models.Product
	config.DB.First(&product)
	c.JSON(http.StatusOK, product)
}

func Create(c *gin.Context) {
	var product models.Product
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
	}
	result := config.DB.Create(&product)
	c.JSON(http.StatusOK, gin.H{
		"Create": result.RowsAffected,
	})
}

func Edit(c *gin.Context) {
	id := c.Param("id")
	var product models.Product
	var productUpdate models.Product
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
	}
	config.DB.First(&productUpdate, id)
	result := config.DB.Save(&productUpdate)
	c.JSON(http.StatusOK, result)
}

func Delete(c *gin.Context) {
	id := c.Param("id")
	var product models.Product
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err.Error(),
		})
	}
	config.DB.First(&product, id)
	result := config.DB.Delete(&product)
	c.JSON(http.StatusOK, result)
}
