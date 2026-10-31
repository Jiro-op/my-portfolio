import { profile, cvFileName } from "../data/profile.js";

function CV() {
  return (
    <section className="container section">
      <p className="eyebrow">Curriculum vitae</p>
      <h1>My CV</h1>

      {profile.cv ? (
        <>
          <p className="muted">
            My latest CV as a PDF. Download a copy, or view it online in a new tab.
          </p>
          <div className="cv-actions">
            <a href={profile.cv} download={cvFileName} className="btn btn-primary">
              Download CV
            </a>
            <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="btn">
              View CV Online
            </a>
          </div>
        </>
      ) : (
        <p>My CV will be available here soon.</p>
      )}
    </section>
  );
}

export default CV;