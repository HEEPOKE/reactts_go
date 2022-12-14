package main

import (
	"Backend/api/config"
	"Backend/api/routes"
	"fmt"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println("Error loading .env file")
	}
	config.Database()
	routes.Router()
}
