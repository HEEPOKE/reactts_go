import Swal from "sweetalert2";
import ProductApi from "../services/ProductServices";
import DeleteProductInterface from "../interfaces/DeleteProductInterface";
import ResponseInterface from "../interfaces/ResponseInterface";

function historyBack() {
  window.history.back();
}

function reload() {
  window.location.reload();
}

function con(link: any) {
  window.location.href = `${link}`;
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
    denyButtonText: "Delete",
  }).then((res: any) => {
    if (res.isDenied) {
      ProductApi.DeleteProduct(id);
    }
  });
};

const caseSuccess = ({ message, link }: ResponseInterface) => {
  Swal.fire({
    icon: "success",
    title: "Success",
    text: `${message}`,
  })
    .then((res: any) => {
      if (res.isConfirmed) {
        if (link == "getReload") {
          reload();
        } else {
          con(link);
        }
      }
    })
    .catch((err: any) => {
      caseErr(err);
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
    text: `${err}`,
    denyButtonText: "OK",
  });
};

const ProductSwal = { readErr, confirmDelete, caseSuccess, resErr, caseErr };

export default ProductSwal;
