import Swal from "sweetalert2";

const loginSuccess = (message: any) => {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: true,
  }).then((res: any) => {
    if (res.isConfirmed) {
      window.location.href = "/";
    }
  });
};

const loginSwal = { loginSuccess };

export default loginSwal;
