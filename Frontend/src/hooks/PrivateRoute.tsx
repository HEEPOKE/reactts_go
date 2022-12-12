import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navigation = useNavigate();

const PrivateRoute = (props: any) => {
  const token = localStorage.getItem("auth");
  return token ? <Route {...props} /> : navigation("/auth/login");
};

export default PrivateRoute;
