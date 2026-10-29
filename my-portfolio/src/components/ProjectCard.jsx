import { Link } from "react-router";

function ProjectCard({project}) {
    return (
        <article className="project-card">
            <Link
            to={'/projects/${project.slug}'}
            className="project-image-link"
            aria-label={'View ${project.name}'}
            >
                {project.image ? (
                    <img src={project.image} alt={'${project.name} cover'} loading="lazy" />
                ) : (
                    <div className="image-placeholder">Project image</div>
                )}    
            </Link>

            <div className="project-body">
                <p className="eyebrow">
                    {project.type} . {project.year}
                </p>
                <h3>{project.name}</h3>
                <p className="muted">{project.description}</p>

                <ul className="chips chips-small">
                    {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>

                <p className="project-meta">
                    {project.category} . {project.role} . {project.status}
                </p>

                <div className="project-actions">
                    <Link to={'./projects/${project.slug}'} className="btn">View Project</Link>
                    {project.githubUrl && (
                        <a href={project.githubUrl} className="btn" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} className="btn" target="_blank" rel="noopener noreferrer">
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;