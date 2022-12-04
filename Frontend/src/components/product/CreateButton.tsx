import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function CreateButton() {
  return (
    <LinkContainer to="/create-product">
      <Button type="button" className="btn btn-primary col-auto ms-2">
        Create
      </Button>
    </LinkContainer>
  );
}
