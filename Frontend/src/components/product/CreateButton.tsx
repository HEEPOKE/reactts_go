import React from "react";
import { Button, Container, Row } from "react-bootstrap";

export default function CreateButton() {
  return (
      <Row className="float-end">
        <Button type="button" className="btn btn-primary col-auto">
          Create
        </Button>
      </Row>
  );
}
