import React, { useState, Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate, Outlet } from "react-router-dom";
import * as Yup from "yup";
import { LinkContainer } from "react-router-bootstrap";
import GoogleLoginButton from "../../features/GoogleLoginButton";
import IConditionalRoute from "../../interfaces/history";
import AuthService from "../../services/auth/AuthService";
import UserInterface from "../../interfaces/UserInterface";

type Props = {};

export default class Register extends Component<Props, UserInterface> {
  constructor(props: Props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  validationSchema() {
    return Yup.object().shape({
      username: Yup.string()
        .test(
          "len",
          "The username must be between 3 and 20 characters.",
          (val: any) =>
            val && val.toString().length >= 3 && val.toString().length <= 20
        )
        .required("This field is required!"),
      email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
      password: Yup.string()
        .test(
          "len",
          "The password must be between 6 and 40 characters.",
          (val: any) =>
            val && val.toString().length >= 6 && val.toString().length <= 40
        )
        .required("This field is required!"),
    });
  }

  handleRegister(formValue: {
    username: string;
    email: string;
    password: string;
  }) {
    const { username, email, password } = formValue;

    this.setState({
      message: "",
      successful: false,
    });

    AuthService.register(username, email, password).then(
      (response) => {
        this.setState({
          message: response.data.message,
          successful: true,
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage,
        });
      }
    );
  }

  render() {
    const { successful, message } = this.state;

    const initialValues = {
      username: "",
      email: "",
      password: "",
    };

    const Back = () => {
      window.history.back();
    };

    // const ConditionalRoute = ({ condition = false }: IConditionalRoute) => {
    //   return condition ? <Outlet /> : <Navigate to={"/login"} />;
    // };

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
                <h4>Login</h4>
              </div>
              <Form>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    minLength={8}
                    placeholder="Enter Password"
                  />
                </Form.Group>
                <Form.Group
                  className="d-flex justify-content-between align-items-center"
                  controlId="formBasicCheckbox"
                >
                  <Form.Check type="checkbox" label="Remember me" />
                  <LinkContainer to="/auth/Forgot-password">
                    <a>Forgot password?</a>
                  </LinkContainer>
                </Form.Group>
                <Button
                  type="submit"
                  className="btn-lg mt-2 col-12"
                  variant="primary"
                >
                  Login
                </Button>
              </Form>
              <Button
                className="btn-lg mt-2 col-12"
                variant="secondary"
                onClick={Back}
              >
                Back
              </Button>
              <div className="text-center text-lg-start">
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <LinkContainer to="/auth/register">
                    <a className="link-danger NN">Register</a>
                  </LinkContainer>
                </p>
              </div>
              <div className="text-center mt-2 fw-bold">
                <h4>OR</h4>
              </div>
              <GoogleLoginButton />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
