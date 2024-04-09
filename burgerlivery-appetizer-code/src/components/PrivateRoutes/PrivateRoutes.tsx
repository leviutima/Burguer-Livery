import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const token = sessionStorage.getItem("userToken");

  return token ? <Outlet /> : <Navigate to="/login" />;
};
