import { Link, NavLink } from "react-router";

function Navbar () {
    return (
        <header className="navbar">
            <div className="container navbar-inner">
                <Link to="/" className="brand">Julian Renz M. Zoleta</Link>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;