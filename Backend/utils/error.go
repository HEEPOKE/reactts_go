package error

import (
	"Backend/api/models"
	"net/http"
)

func NewInternalServerError(message string) *models.RestErr {
	return &models.RestErr{
		Message: message,
		Status:  http.StatusInternalServerError,
		Error:   "internal_server_error",
	}
}

func NewBadRequestError(message string) *models.RestErr {
	return &models.RestErr{
		Message: message,
		Status:  http.StatusBadRequest,
		Error:   "bad_request",
	}
}
