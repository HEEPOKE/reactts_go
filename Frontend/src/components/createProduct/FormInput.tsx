import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Form, Button, Card } from "react-bootstrap";
import ProductApi from "../../services/ProductServices";

export default function FormInput() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  const Validation = (e: any) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newPrice = parseInt(price);

    var data = {
      name: name,
      category: category,
      color: color,
      price: newPrice,
    };

    ProductApi.AddProduct(data);
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={Validation}>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e: any) => setName(e.target.value)}
                  placeholder="Enter Name"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e: any) => setCategory(e.target.value)}
                  placeholder="Enter Category"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Category
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Color:</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e: any) => setColor(e.target.value)}
                  placeholder="Enter Color"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Color
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  onChange={(e: any) => setPrice(e.target.value)}
                  placeholder="xxx bath"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Price
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className="col-12 justify-content-center">
                  <Button className="btn col-4 mx-2" onClick={handleSubmit}>
                    Add
                  </Button>
                  <LinkContainer to="/product">
                    <Button className="col-4" variant="danger">
                      Cancel
                    </Button>
                  </LinkContainer>
                </Row>
              </Form.Group>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
