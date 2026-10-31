import { useState } from "react";
import { Link, NavLink } from "react-router";
import { profile } from "../data/profile.js";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
    {to: "/", label:"Home"},
    {to: "/about", label:"About"},
    {to: "/skills", label:"Skills"},
    {to: "/experience", label:"Experience"},
    {to: "/projects", label:"Projects"},
    {to: "/education", label:"Education"},
    {to: "/contact", label:"Contact"},
    {to: "/cv", label: "CV"},
];

function Navbar () {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <Link to="/" className="brand" onClick={() => setOpen(false)}>
                {profile.name}
                </Link>

                <nav id="main-nav" className={open ? "open" : ""}>
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
                        {link.label}
                    </NavLink>
                ))}
               </nav> 

               <div className="navbar-controls">
                <ThemeToggle />
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label="Toggle menu"
                    aria-expanded={open}
                    aria-controls="main-nav"
                    onClick={() => setOpen(!open)}
                >
                 <span></span>
                 <span></span>
                 <span></span>
                </button>
               </div>
            </div>
        </header>
    );
}

export default Navbar;