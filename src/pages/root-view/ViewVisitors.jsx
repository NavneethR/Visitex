import {React, useState} from "react";
import NavBar from "../../Components/Root/NavBar";
import { Navigate} from "react-router-dom";
import TableComponent from "../../Components/Root/TableComponent";

const ViewVisitors = () => {
    const [auth,setAuth] = useState(true);
    const [user,setUser] = useState("Navneeth Ramesh")

    if(!auth){
        return (<Navigate to='/root/login'/>);
    }

    return (
        <div className="main">
            <NavBar user={user}/>  
            <TableComponent/> 
        </div>
    )
}

export default ViewVisitors;