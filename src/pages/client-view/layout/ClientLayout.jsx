import { Outlet } from "react-router-dom";
import NavBar from "../../../Components/Root/NavBar";

const ClientLayout = () => {
    return (
        <>
            <NavBar need="false"/>
            <Outlet/>
        </>
    );
};

export default ClientLayout;