import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { profile } from "../data/profile.js";
import { navLinks } from "../data/navLinks.js";
import Logo from "./Logo.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a thin line and blur to the bar once the page has scrolled.
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Let the Escape key close the mobile menu.
  useEffect(() => {
    if (!open) return;
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={"site-header" + (scrolled ? " is-scrolled" : "") + (open ? " is-open" : "")}
    >
      <div className="container site-header-inner">
        <Link
          to="/"
             className={"brand-link" + (profile.logo && profile.logoOnly ? " logo-only" : "")}
          onClick={close}
          aria-label={profile.name + ", home"}
        >
          <Logo />
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
            <span className="brand-role">{profile.title}</span>
          </span>
        </Link>

        <nav id="main-nav" className="site-nav" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={close}
              className={link.cta ? "nav-cta" : undefined}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-controls">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
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