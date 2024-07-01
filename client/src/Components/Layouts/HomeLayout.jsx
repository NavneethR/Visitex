import Navbar from "../NavBar";

const HomeLayout = ({navbar = true,children}) => {
    return (
        <>
            {navbar && <Navbar/>}
            <div className="container mt-3">{children}</div>
        </>
    )
};

export default HomeLayout;