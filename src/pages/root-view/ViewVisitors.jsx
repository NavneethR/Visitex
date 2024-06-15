import React from "react";
import NavBar from "../../Components/Root/NavBar";
import { Navigate} from "react-router-dom";
import TableComponent from "../../Components/Root/TableComponent";

const ViewVisitors = () => {
    const auth = true;

    if(!auth){
        <Navigate to='login'/>
    }

    return (
        <div className="main">
            <NavBar user={auth}/>  
            <TableComponent/> 
        </div>
    )
}

export default ViewVisitors;