import { NavDropdown } from "react-bootstrap";
import logoutSwal from "../../utils/auth/swal/logoutSwal";

export default function NavLogout() {
  const logoutSubmit = () => {
    logoutSwal.logoutHandle();
  };

  return (
    <>
      <NavDropdown.Item onClick={logoutSubmit}>Logout</NavDropdown.Item>
    </>
  );
}
