import {Link} from "react-router";
import { profile} from "../data/profile.js";

function Home() {
    return (
        <section className="container section hero">
            <div className="hero-text">
                <p className="eyebrow">{profile.title}</p>
                <h1>{profile.name}</h1>
                <p className="hero-tagline">{profile.tagline}</p>
                <p className="muted">{profile.intro}</p>
                <div className="hero-actions">
                    <Link to="/projects" className="btn btn-primary">View My Projects</Link>
                    <Link to="contact" className="btn">Contact Me</Link>
                </div>
            </div>

            <div className="hero-photo">
                {profile.photo ? (
                    <img src={profile.photo} alt={'Portrait of ${profile.name}'} />
                ) : (
                    <div className="photo-placeholder">Profile photo</div>
                )}
            </div>
        </section>
    );
}

export default Home;