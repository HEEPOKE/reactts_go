import React, { Component } from "react";
import { Form } from "react-bootstrap";
import TelInterface from "../../interfaces/auth/TelInterface";

export default class TelForm extends Component<{}, any> {
  constructor() {
    super();
    this.state = { value: "" };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: any) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  }
  render() {
    return (
      <Form.Group className="mb-3">
        <Form.Label>Tel</Form.Label>
        <Form.Control
          type="tel"
          name="telephone"
          minLength={10}
          maxLength={10}
          onChange={this.onChange}
          value={this.state.value}
          placeholder="xxx-xxx-xxxx"
          required
        />
        <Form.Control.Feedback type="invalid">
          Please Enter Tel
        </Form.Control.Feedback>
      </Form.Group>
    );
  }
}
