import { Link } from "react-router";

function NotFound() {
    return(
        <section className="container section">
            <p className="eyebrow">404</p>
            <h1>Page not found</h1>
            <p>This page doesn't exist.</p>
            <Link to="/" className="btn">Back to home</Link>
        </section>
    );
}

export default NotFound;