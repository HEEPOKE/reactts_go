import React from "react";
import NavbarMenu from "../components/navbar/NavbarMenu";
import Header from "../components/createProduct/Header";
import FormInput from "../components/createProduct/FormInput";

export default function CreateProductPage() {
  return (
    <div>
      <NavbarMenu />
      <Header />
      <FormInput />
    </div>
  );
}
