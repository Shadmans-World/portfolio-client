import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
    <li className="mr-2 ">
        <Link className="bg-sereneTeal  rounded-xl font-bold hover:bg-sunsetOrange" to='/'>Home</Link>
    </li>
    <li className="mr-2 ">
        <Link className="bg-sereneTeal  rounded-xl font-bold hover:bg-sunsetOrange">Introduction</Link>
    </li>
    <li className="mr-2 ">
        <Link className="bg-sereneTeal  rounded-xl font-bold hover:bg-sunsetOrange">About</Link>
    </li>
    <li className="mr-2 ">
        <Link className="bg-sereneTeal  rounded-xl font-bold hover:bg-sunsetOrange">Skills</Link>
    </li>
    <li className="mr-2 ">
        <Link className="bg-sereneTeal  rounded-xl font-bold hover:bg-sunsetOrange">Education</Link>
    </li>
    <li className="mr-2 ">
        <Link className="bg-sereneTeal  rounded-xl font-bold hover:bg-sunsetOrange">Projects</Link>
    </li>
    <li className="mr-2 ">
        <Link className="bg-sereneTeal  rounded-xl font-bold hover:bg-sunsetOrange">Contact</Link>
    </li>
    </>
  return (
    <div className="bg-deepOcean text-white">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to='/'><img className="w-10" src="https://i.ibb.co.com/qgVwpdy/6229486.png" alt="sss logo" /></Link>
          <Link to='/'><a className="btn btn-ghost text-xl">Shadman</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/ShadmanCV.pdf" className="btn bg-sereneTeal hover:bg-sunsetOrange" download>Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
