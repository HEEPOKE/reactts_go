import React from "react";
import { Button, Form } from "react-bootstrap";

export default function RegisterPage() {
  const Back = () => {
    window.history.back();
  };

  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start mb-3">
              <h4>Register</h4>
            </div>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  minLength={8}
                  placeholder="Enter Password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  minLength={8}
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tel</Form.Label>
                <Form.Control type="tel" placeholder="xxx-xxx-xxxx" />
              </Form.Group>
              <Button
                type="submit"
                className="btn-lg mt-2 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                variant="primary"
              >
                Submit
              </Button>
            </Form>
            <Button
              className="btn-lg mt-2 col-sm-12 col-md-12 col-lg-12 col-xl-12"
              variant="secondary"
              onClick={Back}
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
