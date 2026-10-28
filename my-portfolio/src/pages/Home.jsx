import {Link} from "react-router";

function Home() {
    return (
        <section className="container section">
            <p className="eyebrow">Graphic Designer</p>
            <h1>Juilan Renz Marasigan Zoleta</h1>
            <p className="muted">"Turning Ideas Into Art."</p>
            <Link to="/projects" className="btn btn-primary">View My Projects</Link>
        </section>
    );
}

export default Home;