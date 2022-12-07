import React from "react";
import { Modal,Button } from "react-bootstrap";

export default function DeleteProductModal({
  value,
  show,
  hide,
}: {
  value: any;
  show: any;
  hide: any;
}) {

  return (
    <Modal show={show}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary">
        Close
      </Button>
      <Button variant="primary">
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  );
}
