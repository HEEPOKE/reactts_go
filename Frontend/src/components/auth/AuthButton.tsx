import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import logoutSwal from "../../utils/auth/swal/logoutSwal";

export default function AuthButton() {
  const access_token = sessionStorage.getItem("access_token");

  const logoutSubmit = () => {
    logoutSwal.logouthandle();
  };

  if (access_token == null) {
    return (
      <>
        <LinkContainer to="/auth/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/auth/register">
          <Nav.Link>Register</Nav.Link>
        </LinkContainer>
      </>
    );
  } else {
    return (
      <>
        <Nav.Link onClick={logoutSubmit}>Logout</Nav.Link>
      </>
    );
  }
}
