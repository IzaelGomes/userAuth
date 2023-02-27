import React from "react";
import { Link } from "react-router-dom";
import PrivateMenu from "../../components/PrivateMenuAcess";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <PrivateMenu role="ROLE_ADMIN">
            <Link to={"/Product"}>Cadastrar</Link>
          </PrivateMenu>
          <li>
            <Link to={""}>ver todos os produtos</Link>
          </li>
          <li>
            <Link to={""}>Editar</Link>
          </li>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
