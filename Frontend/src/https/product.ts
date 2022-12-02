import axios from "axios";

export const httpProduct = axios.create({
  baseURL: "http://localhost:6476/api/product",
  headers: {
    "Content-type": "application/json",
  },
});
