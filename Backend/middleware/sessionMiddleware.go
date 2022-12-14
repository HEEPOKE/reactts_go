package middleware

import (
	"net/http"

	"github.com/gorilla/sessions"
)

var store = sessions.NewCookieStore([]byte("super-secret"))

func CheckAuth(HandlerFunc http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		session, _ := store.Get(r, "session")
		_, ok := session.Values["userId"]
		if !ok {
			http.Redirect(w, r, "/login", 302)
			return
		}

		HandlerFunc.ServeHTTP(w, r)
	}
}
