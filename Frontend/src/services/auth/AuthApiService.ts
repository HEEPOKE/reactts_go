import { useNavigate } from "react-router-dom";
import { httpAuth } from "../../https/auth";
import RegisterInterface from "../../interfaces/auth/RegisterInterFace";
import Swal from "sweetalert2";

const navigate = useNavigate();

const loginApi = () => {
  return httpAuth.get<RegisterInterface>("/api/auth/login");
};

const registerApi = (data: RegisterInterface) => {
  return httpAuth
    .post<RegisterInterface>("/api/auth/register", data)
    .then((res: any) => {
      const message = res.data["message"];
      navigate("/");
      // console.log(res.data["message"]);
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
