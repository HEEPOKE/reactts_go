package errors

import "net/http"

type RestErr struct {
	Message string
	Status  int
	Error   string
}

func NewInternalServerError(Message string) *RestErr {
	return &RestErr{
		Message: Message,
		Status:  http.StatusInternalServerError,
		Error:   "internal_server_error",
	}
}

func NewBadRequestError(Message string) *RestErr {
	return &RestErr{
		Message: Message,
		Status:  http.StatusBadRequest,
		Error:   "bad_request_server",
	}
}
