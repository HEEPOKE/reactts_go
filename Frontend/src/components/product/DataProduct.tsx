import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";
import ProductInterface from "../../interfaces/ProductInterface";
import http from "../../https/http";
import ProductSwal from "../../utils/product";

export default function DataProducts() {
  const [product, setProduct] = useState<ProductInterface[]>([]);

  useEffect(() => {
    http
      .get("/api/product/read")
      .then((res: any) => {
        setProduct(res.data.data);
      })
      .catch((err: any) => {
        // ProductSwal.readErr(err);
      });
  }, []);

  if (product.length >= 1) {
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
              <th>Category</th>
              <th>Color</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, i) => {
              var num = i + 1;
              return (
                <tr key={i}>
                  <td>{num++}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.color}</td>
                  <td>{item.price} bath</td>
                  <td>
                    <LinkContainer to={`/update-product/${item.ID}`}>
                      <Button type="button" className="btn btn-warning mx-2">
                        <FontAwesomeIcon icon={["fas", "pen"]} size={"xl"} />
                      </Button>
                    </LinkContainer>
                    <Button
                      type="button"
                      className="btn btn-danger"
                      onClick={() =>
                        ProductSwal.confirmDelete({
                          id: item.ID,
                          name: item.name,
                        })
                      }
                    >
                      <FontAwesomeIcon
                        icon={["fas", "trash-can"]}
                        size={"xl"}
                      />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    );
  } else if (product.length < 1) {
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
              <th>Actions</th>
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
              <th>Actions</th>
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
