import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Mainlayout = () => {
    return (
        <>
            <Navbar/>
            <div className="container mx-auto">
                <Outlet/>
            </div>
        </>
    );
};

export default Mainlayout;