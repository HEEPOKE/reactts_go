import { NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoutSwal from "../../utils/auth/swal/logoutSwal";

export default function NavLogout() {
  const logoutSubmit = () => {
    logoutSwal.logoutHandle();
  };

  return (
    <>
      <NavDropdown.Item onClick={logoutSubmit}>
        <FontAwesomeIcon
          icon={["fas", "right-from-bracket"]}
          className="mx-2"
        />
        Logout
      </NavDropdown.Item>
    </>
  );
}
