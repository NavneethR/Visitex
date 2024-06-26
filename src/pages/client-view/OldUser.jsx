import { Outlet } from "react-router-dom";
import OldUserComponent from "../../Components/Client/OldUserComponent";

const OldUser = () => {
    return (
        <div className="login-page">
            <OldUserComponent/>
            <Outlet/>
        </div>
    )
}

export default OldUser;