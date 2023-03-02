import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userAuth } from "../context/AuthContext";

interface RoutePropsData {
  role?: string;
  children: JSX.Element;
}

const PrivateRoutes = ({ role, children }: RoutePropsData) => {
  const { user, isLoading } = userAuth();
  const hasPermission = user?.roles?.some((r) => role?.includes(r)) ?? false;

 

  if(user && hasPermission) return children;

  return  <Navigate to="/" replace />;
};

export default PrivateRoutes;
