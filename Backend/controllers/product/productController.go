package product

import (
	"Backend/api/config"
	"Backend/api/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ReadProduct(c *gin.Context) {
	var product []models.Product
	config.DB.Order("id").Find(&product)
	c.JSON(http.StatusOK, gin.H{
		"data": product,
	})
}

func GetProductById(c *gin.Context) {
	id := c.Param("id")
	var product []models.Product
	if err := config.DB.Where("id = ?", id).First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "Fail",
			"message": "Record not found!",
		})
		return
	}
	c.JSON(http.StatusOK, product)
}

func AddProduct(c *gin.Context) {
	var product models.Product
	if err := c.ShouldBindJSON(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status": "Fail",
			"error":  err.Error(),
		})
	}
	config.DB.Create(&product)
	c.JSON(http.StatusOK, gin.H{
		"status":  "Success",
		"message": "Add Success",
	})
}

func UpdateProduct(c *gin.Context) {
	id := c.Param("id")
	var product models.Product
	var productUpdate models.Product
	if err := config.DB.Where("id = ?", id).First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "Fail",
			"message": "Record not found!",
		})
		return
	}

	if err := c.ShouldBindJSON(&productUpdate); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status": "Fail",
			"error":  err.Error(),
		})
		return
	}

	config.DB.Model(&product).Updates(productUpdate)
	c.JSON(http.StatusOK, gin.H{
		"status":  "Success",
		"message": "Update Success",
		"data":    product,
	})
}

func Delete(c *gin.Context) {
	id := c.Param("id")
	var product models.Product
	if err := config.DB.Where("id = ?", id).First(&product).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "Fail",
			"message": "Record not found!",
		})
		return
	}
	config.DB.Delete(&product)
	c.JSON(http.StatusOK, gin.H{
		"status":  "Success",
		"message": "Delete Success",
	})
}
