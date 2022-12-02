import { httpAuth } from "../../https/auth";
import RegisterInterface from "../../interfaces/auth/RegisterInterFace";

const loginApi = () => {
  return httpAuth.get<RegisterInterface>("/login");
};

const registerApi = (data: RegisterInterface) => {
  return httpAuth.post<RegisterInterface>("/register", data);
};

const AuthApiServices = {
  loginApi,
  registerApi,
};

export default AuthApiServices;
