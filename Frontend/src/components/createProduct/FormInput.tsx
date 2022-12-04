import React from "react";
import { Container, Row, Form, Button, Card } from "react-bootstrap";
import "../../assets/css/product/create.css";

export default function FormInput() {
  return (
    <Container>
      <Card className="mt-5">
        <Card.Body>
          <Row>
            <div className="col-md-3">
              <div className="contact-info">
                <h2>Add</h2>
                <h2>Products</h2>
              </div>
            </div>
            <div className="col-md-9">
              <div className="contact-form">
                <Form.Group className="form-group">
                  <Form.Label className="control-label col-sm-2">
                    First Name:
                  </Form.Label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="control-label col-sm-2">
                    Last Name:
                  </Form.Label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Label className="control-label col-sm-2">
                    Email:
                  </Form.Label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <Button type="submit" className="btn btn-default">
                      Submit
                    </Button>
                  </div>
                </Form.Group>
              </div>
            </div>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
