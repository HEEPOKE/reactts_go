import Swal from "sweetalert2";

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
  });
};

const ProductSwal = { readErr };

export default ProductSwal;
