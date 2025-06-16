import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrolTop from "../../components/ScrolTop";

const MainRoots = () => {
    return (
        <div className="font-oleoScript">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrolTop></ScrolTop>
        </div>
    );
};

export default MainRoots;