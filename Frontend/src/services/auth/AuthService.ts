import axios from "axios";
import http from "../../https/http";

let refresh = false;

axios.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;

      const response = await http.post(
        "/api/auth/refresh",
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `${response.data["token"]}`;

        return axios(error.config);
      }
    }
    refresh = false;
    return error;
  }
);
