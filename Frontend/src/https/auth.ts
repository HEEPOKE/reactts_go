import axios from "axios";

export const httpAuth = axios.create({
  // baseURL: process.env.BASE_BACKEND_URL,
  baseURL: "http://localhost:6476",
  headers: {
    "Content-type": "application/json",
    // accept: "application/json",
  },
});
