import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Row, Form, Button, Card } from "react-bootstrap";
import "../../assets/css/product/create.css";

export default function FormInput() {
  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <Row>
            <div className="col-12">
              <div className="contact-form">
                <Form.Group className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Category:</Form.Label>
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Color:</Form.Label>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control type="number" min={0} placeholder="xx bath" />
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
              </div>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
