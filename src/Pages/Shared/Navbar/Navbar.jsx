import React from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const links = (
    <>
      <li className="mr-2">
        <a className="bg-sereneTeal rounded-xl font-bold hover:bg-sunsetOrange" href="#information">Introduction</a>
      </li>
      <li className="mr-2">
        <a className="bg-sereneTeal rounded-xl font-bold hover:bg-sunsetOrange" href="#about">About</a>
      </li>
      <li className="mr-2">
        <a className="bg-sereneTeal rounded-xl font-bold hover:bg-sunsetOrange" href="#skills">Skills</a>
      </li>
      <li className="mr-2">
        <a className="bg-sereneTeal rounded-xl font-bold hover:bg-sunsetOrange" href="#education">Education</a>
      </li>
      <li className="mr-2">
        <a className="bg-sereneTeal rounded-xl font-bold hover:bg-sunsetOrange" href="#projects">Projects</a>
      </li>
      <li className="mr-2">
        <a className="bg-sereneTeal rounded-xl font-bold hover:bg-sunsetOrange" href="#contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="bg-deepOcean text-white top-0 z-20 sticky">
      <div className="navbar">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {location.pathname === "/" && links}
            </ul>
          </div>
          <Link to="/">
            <img className="w-10" src="https://i.ibb.co/qgVwpdy/6229486.png" alt="Logo" />
          </Link>
          <Link className="hidden md:block" to="/">
            <span className="btn btn-ghost text-xl">Shadman</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {location.pathname === "/" && links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="/ShadmanCV.pdf" className="btn bg-sereneTeal hover:bg-sunsetOrange" download>
            <GrDocumentPdf className="text-[16px]" /> Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
