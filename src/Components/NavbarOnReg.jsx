import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { SlHandbag } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";

const NavbarOnReg = () => {

    const navMenu =
        <>
            <li><NavLink to="/order">Order</NavLink></li>
            <li><NavLink to="/order-review">Order Review</NavLink></li>
            <li><NavLink to="/manage-inventory">Manage Inventory</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
        </>
    const navMenuWhileLoggedIn =
    <div className="flex items-center">
        <li><NavLink to="/order">Order</NavLink></li>
        <li><NavLink to="/order-review">Order Review</NavLink></li>
        <li><NavLink to="/manage-inventory">Manage Inventory</NavLink></li>
        <li><Link> <BiUser /> </Link></li>
        <li><Link> <FiSearch /> </Link></li>
        <li><Link> <FaRegHeart /> </Link></li>
        <li><Link> <SlHandbag /> </Link></li>
    </div>

    return (
        <div className="navbar bg-base-100 w-full">
            <div className="navbar-start">

                <Link to="/"><img src={logo} alt="" className="w-4/5 md:w-full" /></Link>

            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
                        {navMenu}   
                        {/* {navMenuWhileLoggedIn} */}
                    </ul>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                        {navMenu}   
                        {/* {navMenuWhileLoggedIn} */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavbarOnReg;