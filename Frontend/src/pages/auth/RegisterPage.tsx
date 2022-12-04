import React, { useState, ChangeEvent } from "react";
import { Button, Form } from "react-bootstrap";
import RegisterInterface from "../../interfaces/auth/RegisterInterFace";
import AuthApiServices from "../../services/auth/AuthApiService";
import axios from "axios";

export default function RegisterPage() {
  const authState = {
    username: "",
    email: "",
    password: "",
    tel: "",
  };

  const [register, setRegister] = useState<RegisterInterface>(authState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleSubmit = () => {
    var data = {
      username: register.username,
      email: register.email,
      password: register.password,
      tel: register.tel,
    };

    AuthApiServices.registerApi(data);
  };

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
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  id="username"
                  // value={register.username}
                  onChange={handleInputChange}
                  placeholder="Enter Username"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  // value={register.email}
                  onChange={handleInputChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  // value={register.password}
                  onChange={handleInputChange}
                  minLength={8}
                  maxLength={20}
                  placeholder="Enter Password"
                  required
                />
              </Form.Group>
              {/* <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    onChange={handleInputChange}
                    value={register.}
                    minLength={8}
                    placeholder="Confirm Password"
                  />
                </Form.Group> */}
              <Form.Group className="mb-3">
                <Form.Label>Tel</Form.Label>
                <Form.Control
                  type="tel"
                  id="tel"
                  // value={register.tel}
                  onChange={handleInputChange}
                  minLength={10}
                  maxLength={10}
                  placeholder="xxx-xxx-xxxx"
                  required
                />
              </Form.Group>
              <Button
                type="submit"
                className="btn-lg mt-2 col-12"
                variant="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Form>
            <Button
              className="btn-lg mt-2 col-12"
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
