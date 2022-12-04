import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import ProductInterface from "../../interfaces/ProductInterface";

export default function DataProducts() {
  const [product, setProduct] = useState<ProductInterface[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:6476/api/product/read")
      .then((res: any) => {
        setProduct(res.data);
        console.log(res.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  }, []);

  if (product.length < 1) {
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
              <td colSpan={6}>
                <h2 className="mt-2">ยังไม่มีข้อมูล</h2>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  } else if (product.length <= 1) {
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
            {product.map((value, i) => {
              return (
                <tr key={value.ID}>
                  <td>{value.ID}</td>
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
  } else {
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
              <td colSpan={6}>
                <h2 className="mt-2">Server Error</h2>
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}
