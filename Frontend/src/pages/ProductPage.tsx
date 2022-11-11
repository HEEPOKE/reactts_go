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
            <h4 className="mt-2">List Product</h4>
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
