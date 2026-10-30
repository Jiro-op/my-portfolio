import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";
import NotFound from "./NotFound.jsx";

function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return <NotFound />;
  }

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  const features = project.features ?? [];
  const technologies = project.technologies ?? [];
  const screenshots = project.screenshots ?? [];

  const links = [
    { label: "Live website", url: project.projectUrl },
    { label: "GitHub", url: project.githubUrl },
    { label: "Documentation", url: project.docsUrl },
    { label: "Demo", url: project.demoUrl },
  ].filter((link) => link.url);

  return (
    <article className="container section">
      <Link to="/projects" className="back-link">← All projects</Link>

      <header className="project-header">
        <p className="eyebrow">
          {project.type} · {project.year}
        </p>
        <h1>{project.name}</h1>
        <p className="project-lead">{project.description}</p>
      </header>

      {project.image ? (
        <img className="project-cover" src={project.image} alt={project.name + " cover"} />
      ) : (
        <div className="image-placeholder project-cover">Project image</div>
      )}

      <div className="project-layout">
        <div className="project-story">
          <h2>Overview</h2>
          <p>{project.overview}</p>

          <h2>The problem</h2>
          <p>{project.problem}</p>

          <h2>The solution</h2>
          <p>{project.solution}</p>

          <h2>Features</h2>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <h2>Technologies used</h2>
          <ul className="chips">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <aside className="project-facts">
          <dl className="facts">
            <div>
              <dt>Creator's role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div>
              <dt>Type</dt>
              <dd>{project.type}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>

          {links.length > 0 && (
            <div className="project-actions project-links">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </aside>
      </div>

      {screenshots.length > 0 && (
        <section className="project-gallery">
          <h2>Screenshots</h2>
          {screenshots.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={project.name + " screenshot " + (i + 1)}
              loading="lazy"
            />
          ))}
        </section>
      )}

      <nav className="next-project" aria-label="Next project">
        <p className="eyebrow">Next project</p>
        <Link to={"/projects/" + nextProject.slug}>{nextProject.name} →</Link>
      </nav>
    </article>
  );
}

export default ProjectDetail;