import { httpAuth } from "../../https/auth";
import LoginInterface from "../../interfaces/auth/LoginInterface";
import RegisterInterface from "../../interfaces/auth/RegisterInterFace";
import AuthSwal from "../../utils/auth/swal/registerSwal";

const loginApi = (data: LoginInterface) => {
  return httpAuth
    .post<LoginInterface>("/api/auth/login", data)
    .then((res: any) => {
      console.log(res.data);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

const registerApi = (data: RegisterInterface) => {
  return httpAuth
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
      AuthSwal.errCase(err);
    });
};

const AuthApiServices = {
  loginApi,
  registerApi,
};

export default AuthApiServices;
