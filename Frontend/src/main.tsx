import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/routes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/loading.css";
import "./assets/css/Auth.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
