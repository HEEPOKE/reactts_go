import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductInterface from "../../interfaces/ProductInterface";
import http from "../../https/http";
import ProductSwal from "../../utils/product";
import DeleteProductModal from "../../features/DeleteProductModal";

export default function DataProducts() {
  const [product, setProduct] = useState<ProductInterface[]>([]);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    http
      .get("/api/product/read")
      .then((res: any) => {
        setProduct(res.data);
      })
      .catch((err: any) => {
        ProductSwal.readErr(err);
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
              <th>Color</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, i) => {
              return (
                <tr key={item.ID}>
                  <td>{i++}</td>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.category}</td>
                  <td>{item.price} bath</td>
                  <td>
                    <Button type="button" className="btn btn-warning mx-2">
                      <FontAwesomeIcon icon={["fas", "pen"]} size={"xl"} />
                    </Button>
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
