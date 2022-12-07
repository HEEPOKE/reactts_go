import http from "../https/http";
import ProductInterface from "../interfaces/ProductInterface";
import ProductSwal from "../utils/product";

const AddProduct = (data: any) => {
  return http
    .post<ProductInterface>("/api/product/add", data)
    .then((res: any) => {
      window.location.href = "/product";
    })
    .catch((err: any) => {
      ProductSwal.caseErr(err);
    });
};

const DeleteSwal = (id: any) => {
  return http
    .delete(`/api/product/delete/${id}`)
    .then((res: any) => {
      const status = res.data["status"]
      const message = res.data["message"]

      if (status == "Success") {
        ProductSwal.caseSuccess(message) 
      } else {
        ProductSwal.resErr(message)
      }
    })
    .catch((err: any) => {
      ProductSwal.caseErr(err);
    });
};

const ProductApi = { AddProduct, DeleteSwal };

export default ProductApi;
