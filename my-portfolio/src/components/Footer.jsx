import { Link } from "react-router";
import { profile } from "../data/profile.js";
import { navLinks } from "../data/navLinks.js";
import SocialLinks from "./SocialLinks.jsx";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">{profile.title}</p>
          <a href={"mailto:" + profile.email}>{profile.email}</a>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow">Quick links</p>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks compact heading="Elsewhere" />
      </div>

      <div className="container footer-bottom">
        <p className="muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;