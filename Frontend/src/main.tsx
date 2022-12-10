import ReactDOM from "react-dom/client";
import AppRouter from "./routes/routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faSquarePen,
  faTrashCan,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/loading.css";
import "./assets/css/Auth.css";

library.add(fas, far, faSquarePen, faTrashCan, faUser);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppRouter />
);
