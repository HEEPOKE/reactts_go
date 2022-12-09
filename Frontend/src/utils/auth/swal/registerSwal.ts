import Swal from "sweetalert2";

const registerSuccess = (message: any) => {
  Swal.fire({
    icon: "success",
    title: message,
    html:
      '<a href="http://localhost:5173/auth/login">click here</a> ' +
      "Go to Login Page",
    showConfirmButton: false,
  });
};

const registerError = (message: any) => {
  Swal.fire({
    icon: "error",
    title: message,
    text: "Emailนี้ มีการใช้งานเเล้ว กรุณากรอก Email ใหม่อีกครั้ง",
  });
};

const AuthSwal = { registerSuccess, registerError };

export default AuthSwal;
