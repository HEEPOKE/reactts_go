import React from "react";
import { Card, Container } from "react-bootstrap";
import NavbarMenu from "../components/navbar/NavbarMenu";
import Header from "../components/product/Header";
import CreateButton from "../components/product/CreateButton";
import TableProduct from "../components/product/TableProduct";

export default function ProductPage() {
  return (
    <div>
      <NavbarMenu />
      <Header />
      <Container className="justify-center">
        <Card>
          <Card.Header className="bg-primary text-white">
            List Product
          </Card.Header>
          <Card.Body>
            <Container fluid>
              <CreateButton />
              <TableProduct />
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}
