import Swal from "sweetalert2";

const readErr = (err: any) => {
  Swal.fire({
    icon: "error",
    title: "Server Error",
    text: err,
  });
};

const ProductSwal = { readErr };

export default ProductSwal;
