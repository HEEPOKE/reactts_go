import { httpAuth } from "../../https/auth";
import RegisterInterface from "../../interfaces/auth/RegisterInterFace";
import AuthSwal from "../../utils/auth/swal/registerSwal";

const loginApi = () => {
  return httpAuth.get<RegisterInterface>("/api/auth/login");
};

const registerApi = (data: RegisterInterface) => {
  return httpAuth
    .post<RegisterInterface>("/api/auth/register", data)
    .then((res: any) => {
      const getMessage = res.data["message"];
      const message = `Register ${getMessage}`;

      AuthSwal.registerSuccess(message);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

const AuthApiServices = {
  loginApi,
  registerApi,
};

export default AuthApiServices;
