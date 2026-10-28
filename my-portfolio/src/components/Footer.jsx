import {profile} from "../data/profile.js";

function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <p className="muted">
                  © {new Date().getFullYear()} {profile.name} . {profile.title}</p>
            </div>
        </footer>
    );
}

export default Footer;