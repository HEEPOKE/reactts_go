import Swal from "sweetalert2";
import TokenInterface from "../../../interfaces/auth/TokenInterface";
import AuthApiServices from "../../../services/auth/AuthApiService";

const logoutHandle = (token : TokenInterface) => {
  Swal.fire({
    icon: "question",
    title: "Confirm Logout",
    showConfirmButton: false,
    showDenyButton: true,
    denyButtonText: "Confirm",
    showCancelButton: true,
  }).then((res: any) => {
    if (res.isDenied) {
      AuthApiServices.logoutApi(token);
    }
  });
};

const logoutSwal = { logoutHandle };

export default logoutSwal;
