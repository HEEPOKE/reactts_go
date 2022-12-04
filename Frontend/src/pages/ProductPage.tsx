import { Card, Container, Table, Button } from "react-bootstrap";
import NavbarMenu from "../components/navbar/NavbarMenu";
import Header from "../components/product/Header";
import CreateButton from "../components/product/CreateButton";
import DataProducts from "../components/product/DataProduct";

export default function ProductPage() {
  return (
    <div>
      <NavbarMenu />
      <Header />
      <Container className="justify-center">
        <Card>
          <Card.Header className="bg-primary text-white">
            <h4 className="mt-2">List Product</h4>
          </Card.Header>
          <Card.Body>
            <Container fluid>
              <CreateButton />
              <DataProducts />
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
