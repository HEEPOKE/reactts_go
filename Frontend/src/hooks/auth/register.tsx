import React from "react";
import axios from "axios";
import UserInterface from "../../interfaces/UserInterface";
import { errorAuth } from "../../utils/auth/errorAuth";

export const Register = async (
  username: string,
  email: string,
  password: string,
  tel: string
): Promise<UserInterface> => {
  const data: UserInterface = await axios
    .post("http://localhost:6476/api/auth/register", {
      username,
      email,
      password,
      tel,
    })
    .then((res: any) => res.data)
    .catch((err: any) => errorAuth(err));

  return data;
};
