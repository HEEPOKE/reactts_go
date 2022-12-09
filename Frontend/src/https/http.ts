import axios from "axios";

const access_token = sessionStorage.getItem("access_token") ?? null;

const http = axios.create({
  // baseURL: process.env.BASE_BACKEND_URL,
  baseURL: "http://localhost:6476",
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer " + access_token,
  },
});

export default http;
