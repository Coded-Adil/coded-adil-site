import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Mainlayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Mainlayout;