import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <Link
          to="https://www.linkedin.com/in/swati-srivastav-sde/"
          target="_blank"
        >
          Linkedin
        </Link>
        <Link
          to="https://drive.google.com/drive/folders/12EE_Z8BtuK85ESdehcq03Ch2aXp6roYk?usp=sharing"
          target="_blank"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
