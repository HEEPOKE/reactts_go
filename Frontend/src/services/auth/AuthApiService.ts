import { httpAuth } from "../../https/auth";
import UserInterface from "../../interfaces/UserInterface";

const loginApi = () => {
  return httpAuth.get<UserInterface>("/login");
};

const registerApi = (data: UserInterface) => {
  return httpAuth.post<UserInterface>("/register", data);
};

const AuthApiServices = {
  loginApi,
  registerApi,
};

export default AuthApiServices;
