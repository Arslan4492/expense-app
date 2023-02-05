import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login, Register } from "../containers";
import Expenses from "../containers/expenses";
import AppLayout from "../layout";
import { setUser } from "../store/slices/user";
import { sls } from "../utils";
import NoAuthRequired from "./no-auth-required";
import ProtectedRoutes from "./protected-routes";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const _token = sls.decode("expense-token");
  if (_token) {
    dispatch(setUser(sls.decodeToken(_token)));
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<AppLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/expenses' element={<Expenses />} />
          </Route>
        </Route>
        <Route element={<NoAuthRequired />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
