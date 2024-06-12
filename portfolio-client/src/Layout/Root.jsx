import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";


const Root = () => {
    return (
        <div>
            <div className="bg-[#170550]">
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;