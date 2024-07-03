import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";

const ClientLayout = () => {
  return (
    <>
      <Navbar client={true} />
      <Outlet />
    </>
  );
};

export default ClientLayout;
