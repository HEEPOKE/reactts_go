import axios from "axios";
import RegisterInterface from "../../interfaces/auth/RegisterInterFace";
import { errorAuth } from "../../utils/auth/errorAuth";

export const requestRegister = async (
  username: string,
  email: string,
  password: string,
  tel: string
): Promise<RegisterInterface> => {
  const data: RegisterInterface = await axios
    .post("http://localhost:6476/api/auth/register", {
      username,
      email,
      password,
      tel,
    })
    .then((res: any) => res.data)
    .catch((err: any) => console.log(err));
    // .catch((err: any) => errorAuth(err));

  return data;
};
