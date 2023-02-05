import { Navigate, Outlet } from "react-router-dom";
import { sls } from "../utils";

const NoAuthRequired = () => {
  let token = sls.decode("expense-token");

  if (token) {
    return <Navigate to='/' replace={true} />;
  }

  return <Outlet />;
};

export default NoAuthRequired;
