import http from "../https/http";
import ProductSwal from "../utils/product";
import ProductInterface from "../interfaces/ProductInterface";

const AddProduct = (data: any) => {
  return http
    .post<ProductInterface>("/api/product/add", data)
    .then((res: any) => {
      const status = res.data["status"];
      const message = res.data["message"];
      const link = "/product";

      if (status == "Success") {
        ProductSwal.caseSuccess({ message, link });
      } else {
        ProductSwal.resErr(message);
      }
    })
    .catch((err: any) => {
      ProductSwal.caseErr(err);
    });
};

const DeleteProduct = (id: any) => {
  return http
    .delete(`/api/product/delete/${id}`)
    .then((res: any) => {
      const status = res.data["status"];
      const message = res.data["message"];
      const link = "getReload";

      if (status == "Success") {
        ProductSwal.caseSuccess({ message, link });
      } else {
        ProductSwal.resErr(message);
      }
    })
    .catch((err: any) => {
      ProductSwal.caseErr(err);
    });
};

const ProductApi = { AddProduct, DeleteProduct };

export default ProductApi;
