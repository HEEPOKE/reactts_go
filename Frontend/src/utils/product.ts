import Swal from "sweetalert2";
import DeleteProductInterface from "../interfaces/DeleteProductInterface";
import ProductApi from "../services/ProductServices";

function historyBack() {
  window.history.back();
}

const readErr = (err: any) => {
  Swal.fire({
    icon: "error",
    title: "Server Error",
    text: err,
    showConfirmButton: true,
    confirmButtonText: "Back",
  }).then((res: any) => {
    if (res.isConfirmed) {
      historyBack();
    }
  });
};

const confirmDelete = ({ id, name }: DeleteProductInterface) => {
  Swal.fire({
    icon: "warning",
    title: "Confirm Delete Product",
    text: `คุณต้องการลบสิ้นค้าชื่อ ${name} ใช่หรือไม่`,
    showConfirmButton: false,
    showDenyButton: true,
    showCancelButton: true,
    denyButtonText: "Confirm",
  }).then((result: any) => {
    if (result.isDenied) {
      ProductApi.DeleteSwal(id);
    }
  });
};

const caseSuccess = (message: any) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: `${message}`,
  });
};

const resErr = (message: any) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: `${message}`,
    denyButtonText: "OK",
  });
};

const caseErr = (err: any) => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: `Error: ${err}`,
    denyButtonText: "OK",
  });
};

const ProductSwal = { readErr, confirmDelete, caseSuccess, resErr, caseErr };

export default ProductSwal;
