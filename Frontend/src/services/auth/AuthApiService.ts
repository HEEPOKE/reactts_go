import http from "../../https/http";
import LoginInterface from "../../interfaces/auth/LoginInterface";
import RegisterInterface from "../../interfaces/auth/RegisterInterFace";
import AuthSwal from "../../utils/auth/swal/registerSwal";
import loginSwal from "../../utils/auth/swal/loginSwal";
import errSwal from "../../utils/auth/errorAuth";

const loginApi = (data: LoginInterface) => {
  return http
    .post<LoginInterface>("/api/auth/login", data)
    .then((res: any) => {
      const access_token = res.data["access_token"];
      const message = res.data["message"];
      const status = res.data["status"];

      if (status == "Ok") {
        sessionStorage.setItem("access_token", access_token);
        // localStorage.setItem("user", JSON.stringify(access_token));
        loginSwal.loginSuccess(message);
      }
    })
    .catch((err: any) => {
      errSwal.errCase(err);
    });
};

const registerApi = (data: RegisterInterface) => {
  return http
    .post<RegisterInterface>("/api/auth/register", data)
    .then((res: any) => {
      const getMessage = res.data["message"];
      const message = `Register ${getMessage}`;

      if (getMessage == "Success") {
        AuthSwal.registerSuccess(message);
      } else {
        AuthSwal.registerError(message);
      }
    })
    .catch((err: any) => {
      errSwal.errCase(err);
    });
};

const logoutApi = () => {
  return http.get("api/auth/logout").then((res: any) => {
    sessionStorage.removeItem("access_token");
    window.location.href = "/";
  });
};

const AuthApiServices = {
  loginApi,
  registerApi,
  logoutApi,
};

export default AuthApiServices;
