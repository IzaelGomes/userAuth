import React from "react";
import { Link } from "react-router-dom";
import PrivateMenu from "../../components/PrivateMenuAcess";
import { userAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { userLogged } = userAuth();

  console.log(userLogged);

  return (
    <div>
      <ul>
        <li>
          <PrivateMenu role="ROLE_ADMIN">
            <Link to={"/Product"}>Cadastrar</Link>
          </PrivateMenu>
        </li>
        <li>
          <Link to={""}>ver todos os produtos</Link>
        </li>
        <li>
          <Link to={""}>Editar</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
