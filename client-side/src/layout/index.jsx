import { Outlet } from "react-router-dom";
import AppHeader from "./header";

const AppLayout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <AppHeader />
      <div className='bg-gray-200 flex-auto h-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
