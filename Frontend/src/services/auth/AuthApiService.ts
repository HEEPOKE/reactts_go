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
        localStorage.setItem("user", JSON.stringify(access_token));
        loginSwal.loginSuccess(message);
      }
    })
    .catch((err: any) => {
      console.log(err);
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
  return http.get("/logout").then((res: any) => {
    localStorage.removeItem("user");
    window.location.href = "/auth/login";
  });
};

const AuthApiServices = {
  loginApi,
  registerApi,
  logoutApi,
};

export default AuthApiServices;
