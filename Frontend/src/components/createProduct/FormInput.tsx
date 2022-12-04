import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../../assets/css/product/create.css";

export default function FormInput() {
  return (
    <Container>
      <Row>
        <div className="col-md-3 bg-warning">
          <div className="contact-info">
            <img
              src="https://image.ibb.co/kUASdV/contact-image.png"
              alt="image"
            />
            <h2>Contact Us</h2>
            <h4>We would love to hear from you !</h4>
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
              <Form.Label className="control-label col-sm-2">Email:</Form.Label>
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
    </Container>
  );
}
