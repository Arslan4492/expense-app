import { Navigate, Outlet } from "react-router-dom";
import { sls } from "../utils";

const ProtectedRoutes = () => {
  const token = sls.decode("expense-token");
  if (!token) return <Navigate to='/login' replace={true} />;
  return <Outlet />;
};

export default ProtectedRoutes;
