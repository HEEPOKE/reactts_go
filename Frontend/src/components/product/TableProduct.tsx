import React from "react";
import { Container, Table, Button } from "react-bootstrap";

export default function TableProduct() {
  return (
    <Container className="mt-2">
      <Table
        striped
        bordered
        hover
        responsive
        variant="dark"
        className="text-center"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Color</th>
            <th>Category</th>
            <th>Price</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <Button type="button" className="btn btn-warning mx-2">
                Edit
              </Button>
              <Button type="button" className="btn btn-danger">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
