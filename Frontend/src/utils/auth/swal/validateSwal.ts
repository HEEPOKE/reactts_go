import Swal from "sweetalert2";

const confirmPasswordSwal = () => {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "รหัสผ่านเเละยืนยันรหัสผ่านไม่ตรงกัน กรุณากรอกใหม่",
  });
};

const ValidateSwal = { confirmPasswordSwal };

export default ValidateSwal;
