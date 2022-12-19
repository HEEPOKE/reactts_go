import Swal from "sweetalert2";

const errorAuth = (err: any) => {
  if (err?.response?.data?.err) {
    throw err.response.data.err;
  }
  throw err;
};

const errCase = (err: any) => {

  Swal.fire({
    icon: "error",
    title: "Error",
    text: err,
  });
};

const errSwal = { errCase, errorAuth };

export default errSwal;
