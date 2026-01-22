import css from './Project.module.css';
import { projects } from '../../data/project';
import { Link } from 'react-router-dom';

export const Project = () => {
  return (
    <div className={css.projectContainer}>
      <ul className={css.projectList}>
        {projects.map(({ id, src, href, name }) => (
          <li className={css.projectItem} key={id}>
            <Link to={`/project/${id}`}>
              <img
                src={src}
                className={css.img__fluid}
                alt={name}
                width={260}
                height={240}
              />
            </Link>
            {/* <div className={css.projectInfo}>
              <a
                target="_blank"
                rel="noreferrer"
                href={href}
                className={css.projectLink}
              >
                {name}
              </a>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
