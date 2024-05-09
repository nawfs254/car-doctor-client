import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { SlHandbag } from "react-icons/sl";
import { FiSearch } from "react-icons/fi";

const NavbarDefauls = () => {

    const navMenu =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
                        {navMenu}
                    </ul>
                </div>
                <Link to="/"><img src={logo} alt="" className="w-4/5 md:w-full" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold text-lg">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="icons flex text-xl items-center gap-5 px-8">
                    <SlHandbag />
                    <FiSearch />
                </div>
                <button className="btn btn-outline border-orange text-orange text-lg px-7">Appointment</button>
            </div>
        </div>
    );
};

export default NavbarDefauls;