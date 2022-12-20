import NavbarMenu from "../components/navbar/NavbarMenu";
import Header from "../components/home/Header";
import { Button } from "react-bootstrap";
import authHeader from "../services/auth/AuthHeader";

export default function HomePage() {
  return (
    <>
      <NavbarMenu />
      <Header />
      <Button className="btn col-6" onClick={authHeader}>
        go
      </Button>
    </>
  );
}
