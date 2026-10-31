import {profile} from "../data/profile.js";

function About () {
    const facts = [
        {label: "Fullname", value: profile.name},
        {label: "Title", value: profile.title},
        {label: "Location", value: profile.location},
        {label: "Email", value: profile.email},
        {label: "Phone", value: profile.phone},
        {label: "Education", value: profile.education},
        {label: "Occupation", value: profile.occupation},
        {label: "Experience", value: profile.experienceYears},
    ];

    return (
        <section className="container section">
            <p className="eyebrow">About</p>
            <h1>About me</h1>

            <div className="about-grid">
                <h2 className="sr-only">Biography</h2>
                <div>
                    {profile.bio.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <h3>Area of specialization</h3>
                    <ul className="chips">
                        {profile.specializations.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <dl className="facts">
                    {facts.map((fact) => (
                        <div key={fact.label}>
                            <dt>{fact.label}</dt>
                            <dd>{fact.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}

export default About;