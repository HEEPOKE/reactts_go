import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import productProps from "../../interfaces/ProductInterface";

export default function TableProduct() {
  const [product, setProduct] = useState<productProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("127.0.0.1:8080/api/product/get", {
        method: "GET",
      });
      const jsonData = await data.json();
      setProduct(jsonData.results);
    };

    api();
  }, []);

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
          {product.map((value) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.color}</td>
                <td>{value.category}</td>
                <td>{value.price}</td>
                <td>
                  <Button type="button" className="btn btn-warning mx-2">
                    Edit
                  </Button>
                  <Button type="button" className="btn btn-danger">
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
