import React from "react";
import NavbarMenu from "../components/navbar/NavbarMenu";
import HeaderCreate from "../components/createProduct/Header";
import FormInput from "../components/createProduct/FormInput";

export default function CreateProductPage() {
  return (
    <div>
      <NavbarMenu />
      <HeaderCreate />
      <FormInput />
    </div>
  );
}
