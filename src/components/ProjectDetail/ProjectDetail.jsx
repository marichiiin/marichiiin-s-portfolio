import css from './ProjectDetail.module.css';

export const ProjectDetail = ({ project }) => {
  if (!project) {
    return <p>Project not found</p>
  }
  return (
    <div>
      <h1 className={css.projectTitle}>{project.name}</h1>

      {/* <img src={project.src} alt={project.name} /> */}
      
      <div className={css.projectLinks}>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className={css.projectLink}
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={css.projectLinkSecondary}
        >
          GitHub
        </a>
      </div>
      <section className={css.detail}>
        <h2 className={css.sectionTitle}>Overview</h2>
        <p className={css.sectionDesc}>{project.overview}</p>
      </section>



      <div className={css.ProjectDetailtools}>
        <div>
          <h2 className={css.sectionTitle}>Features</h2>
          <ul>
            {project.features.map((feature, index) => (
              <li className={css.projectDetailItem} key={index}>
                  <pre className={css.preProjectDetailItem}></pre>
                  <span className={css.sectionDesc}>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={css.sectionTitle}>Tech Stack</h2>
          <ul>
            {project.techStack.map((tech, index) => (
              <li className={css.projectDetailItem} key={index}>
                  <pre className={css.preProjectDetailItem}></pre>
                  <span className={css.sectionDesc}>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

