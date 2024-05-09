import { Outlet } from "react-router-dom";
import NavbarOnReg from "../Components/NavbarOnReg";

const UserLayout = () => {
    return (
        <div>
            <NavbarOnReg></NavbarOnReg>
            <Outlet></Outlet>
        </div>
    );
};

export default UserLayout;