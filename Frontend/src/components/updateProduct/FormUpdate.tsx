import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Form, Button, Card } from "react-bootstrap";
import ProductInterface from "../../interfaces/ProductInterface";
import http from "../../https/http";
import ProductSwal from "../../utils/product";
import { useParams } from "react-router-dom";

export default function FormUpdate() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [price, setPrice] = useState("");

  const params = useParams();

  useEffect(() => {
    http
      .get(`/api/product/get/${params.id}`)
      .then((res: any) => {
        setName(res.data.name);
        setCategory(res.data.category);
        setColor(res.data.color);
        setPrice(res.data.price);
      })
      .catch((err: any) => {
        ProductSwal.readErr(err);
      });
  }, [`${params.id}`]);

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
                  id="name"
                  onChange={(e: any) => setName(e.target.value)}
                  value={name}
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
                  id="category"
                  onChange={(e: any) => setCategory(e.target.value)}
                  value={category}
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
                  id="color"
                  onChange={(e: any) => setColor(e.target.value)}
                  value={color}
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
                  id="price"
                  min={0}
                  onChange={(e: any) => setPrice(e.target.value)}
                  value={price}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Price
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className="col-12 justify-content-center">
                  <Button
                    type="submit"
                    className="btn col-4 mx-2"
                    onClick={handleSubmit}
                  >
                    Update
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
