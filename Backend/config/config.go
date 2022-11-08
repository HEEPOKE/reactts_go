package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	HOST := os.Getenv("HOST")
	PORT := os.Getenv("PORT")

}

// const config = { HOST, PORT }
