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

const DeleteSwal = (id: any) => {
  return http
    .delete(`/api/product/delete/${id}`)
    .then((res: any) => {
      console.log(res.data);
    })
    .catch((err: any) => {
      console.log(err);
    });
};

const ProductApi = { AddProduct, DeleteSwal };

export default ProductApi;
