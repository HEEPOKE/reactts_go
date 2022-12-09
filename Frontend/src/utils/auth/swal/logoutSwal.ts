import Swal from "sweetalert2";
import AuthApiServices from "../../../services/auth/AuthApiService";

const logouthandle = () => {
  Swal.fire({
    icon: "question",
    title: "Confirm Logout",
    showConfirmButton: false,
    showDenyButton: true,
    denyButtonText: "Confirm",
    showCancelButton: true,
  }).then((res: any) => {
    if (res.isDenied) {
      AuthApiServices.logoutApi();
    }
  });
};

const logoutSwal = { logouthandle };

export default logoutSwal;
