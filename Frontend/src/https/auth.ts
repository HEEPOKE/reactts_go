import axios from "axios";

export const httpAuth = axios.create({
  baseURL: "http://localhost:6476/api/auth",
  headers: {
    "Content-type": "application/json",
    // accept: "application/json",
  },
});
