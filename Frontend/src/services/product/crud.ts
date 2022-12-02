import { httpProduct } from "../../https/product";
import ProductInterface from "../../interfaces/ProductInterface";

const getProduts = () => {
  return httpProduct.get<Array<ProductInterface>>("/read");
};

const deleteProduct = (id: any) => {
  return httpProduct.delete<any>(`/delete/${id}`);
};

const productApi = {
  getProduts,
  deleteProduct,
};

export default productApi;
