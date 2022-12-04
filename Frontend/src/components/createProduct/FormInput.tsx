import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Form, Button, Card } from "react-bootstrap";

export default function FormInput() {
  const [validated, setValidated] = useState(false);

  const Validation = (e: any) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
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
                  className="form-control"
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
                  className="form-control"
                  placeholder="Enter Category"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Category
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Color:</Form.Label>
                <Form.Control type="text" placeholder="Enter Color" required />
                <Form.Control.Feedback type="invalid">
                  Please Enter Color
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price:</Form.Label>
                <Form.Control
                  type="number"
                  min={0}
                  placeholder="xxx bath"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Price
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Row className="col-12 justify-content-center">
                  <Button type="submit" className="btn col-4 mx-2">
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
