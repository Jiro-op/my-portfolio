import { experience } from "../data/experience.js";

function Experience () {
    return (
        <section className="container section">
            <p className="eyebrow">Experience</p>
            <h1>Experience</h1>

            <ol className="timeline">
                {experience.map((job) => (
                    <li key={job.position + job.dates} className="timeline-item">
                        <p className="eyebrow">{job.dates}</p>
                        <h3>{job.position}</h3>
                        <p className="muted">
                            {job.organization} . {job.location}
                        </p>

                        <h4>Responsibilities</h4>
                        <ul>
                            {job.accomplishments.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default Experience;