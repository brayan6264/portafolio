import projects from "../data/Projects";
import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Mis proyectos</h2>
        <p className="projects-subtitle">
          Estos son algunos proyectos que reflejan mi aprendizaje y curiosidad.
        </p>

        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={proj.image} alt={proj.title} />
              </div>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className="tech-list">
                {proj.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Código
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
