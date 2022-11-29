import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
    });
  }

  login(username: string, password: string) {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
