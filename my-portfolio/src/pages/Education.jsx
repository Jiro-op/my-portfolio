import { education, credentials } from "../data/education.js";


function Education() {
    return (
        <section className="container section">
            <p className="eyebrow">Education</p>
            <h1>Education and Credentials</h1>
            
            <h2>Education</h2>
            <div className="enrty-list">
                {education.map((item) => (
                    <article key={item.school + item.year} className="entry">
                        <p className="eyebrow">{item.year}</p>
                        <h3>{item.degree}</h3>
                        <p className="muted">
                            {item.school}
                        </p>
                    </article>
                ))}
            </div>

            <h2>Certifications</h2>
            <div className="entry-list">
                {credentials.map((item) => (
                    <article key={item.name} className="entry">
                        <p className="eyebrow">{item.year}</p>
                        <h3>{item.name}</h3>
                        <p className="muted">{item.issuer}</p>
                        {item.credentialId && (
                            <p className="muted">Credential ID: {item.credentialId}</p>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Education;