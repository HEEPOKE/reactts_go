import Swal from "sweetalert2";
import http from "../https/http";
import ProductInterface from "../interfaces/ProductInterface";

const AddProduct = (data: any) => {
  return http
    .post<ProductInterface>("/api/product/add", data)
    .then((res: any) => {
      window.location.href = "/product";
    })
    .catch((err: any) => {
      console.log(err);
    });
};

const ProductApi = { AddProduct };

export default ProductApi;
