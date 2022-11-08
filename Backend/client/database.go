package client

import (
	"Backend/api/models"
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	DB_URL := os.Getenv("DB_URL")
	DB_NAME := os.Getenv("DB_NAME")

	dsn := "root:root@tcp(" + DB_URL + ")/" + DB_NAME + "?charset=utf8&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&models.Product{})

	db.Create(&models.Product{Name: "D42", Category: "D42", Color: "D42", Price: 100})

	var product models.Product
	db.First(&product, 1)
	db.First(&product, "Name = ?", "D42")

	db.Model(&product).Update("Price", 200)

	db.Model(&product).Updates(models.Product{Name: "D42", Category: "D42", Color: "D42", Price: 120})
	db.Model(&product).Updates(map[string]interface{}{"Name": "D42", "Category": "D42", "Color": "D42", "Price": 120})

	db.Delete(&product, 1)
}
