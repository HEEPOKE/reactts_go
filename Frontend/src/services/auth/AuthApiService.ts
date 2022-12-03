import { httpAuth } from "../../https/auth";
import RegisterInterface from "../../interfaces/auth/RegisterInterFace";

const loginApi = () => {
  return httpAuth.get<RegisterInterface>("/api/auth/login");
};

const registerApi = (data: RegisterInterface) => {
  return httpAuth
    .post<RegisterInterface>("/api/auth/register", data)
    .then((res: any) => res.data)
    .catch((err: any) => console.log(err));
};

const AuthApiServices = {
  loginApi,
  registerApi,
};

export default AuthApiServices;
