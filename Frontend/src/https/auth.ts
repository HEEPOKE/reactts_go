import axios from "axios";

export const httpAuth = axios.create({
  baseURL: "127.0.0.1:6476/api/auth",
  headers: {
    "Content-type": "application/json",
    accept: "application/json",
    // accept: "*/*",
  },
});
