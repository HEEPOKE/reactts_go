import React from "react";
import NavbarMenu from "../components/navbar/NavbarMenu";
import Header from "../components/product/Header";
import TableProduct from "../components/product/TableProduct";

export default function ProductPage() {
  return (
    <div>
      <NavbarMenu />
      <Header />
      <TableProduct />
    </div>
  );
}
