import { Outlet } from "react-router-dom";
import Navbar from "../NavBar";

const HomeLayout = ({ navbar = true, children }) => {
  return (
    <>
      {navbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default HomeLayout;
