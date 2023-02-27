import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";


interface RoutePropsData {
  role?: string;
  children: React.ReactNode;
}

const PrivateRoutes = ({ role, children }: RoutePropsData) => {
  const [permissions, setPermission] = useState([] as string[]);
  const { user } = userAuth();

  const roleByPrivateRouter = role?.split(",");

  const foundRoles =  user?.roles?.some((r: String) =>
    role?.includes(r)
  );

  console.log("role da rota " + roleByPrivateRouter)
  console.log("role do user " + user?.roles)

  useEffect(() => {
    setPermission(foundRoles);
  }, [foundRoles]);

  console.log(permissions)

  const { userLogged } = userAuth();

  if (!userLogged()) {
    return <Navigate to="/" replace />;
  }

  if (!role && userLogged()) {
    return children;
  }

  return permissions ? children : <Navigate to="/" replace />;
};

export default PrivateRoutes;
