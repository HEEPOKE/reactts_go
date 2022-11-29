import axios from "axios";

const AuthApi = () => {
  axios.create({
    baseURL: "http://localhost:8080/api/auth",
    headers: {
      "Content-type": "application/json",
    },
  });
};

export default AuthApi;
