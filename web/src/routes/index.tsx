import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Product from "../pages/Produto";
import PrivateRoutes from "./PrivateRoutes";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoutes role="ROLE_ADMIN, ROLE_USER">
              {" "}
              <Dashboard />{" "}
            </PrivateRoutes>
          }
        />

        <Route
          path="/product"
          element={
            <PrivateRoutes role="ROLE_ADMIN">
              {" "}
              <Product />{" "}
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
