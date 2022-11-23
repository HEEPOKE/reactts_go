import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const CreateProductPage = lazy(() => import("../pages/CreateProductPage"));
const LoadingPage = lazy(() => import("../pages/LoadingPage"));

export default function AppRouter() {
  return (
    <Router>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/create-product" element={<CreateProductPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
