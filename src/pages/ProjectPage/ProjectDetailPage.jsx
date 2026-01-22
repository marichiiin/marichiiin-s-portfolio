import { useParams } from 'react-router-dom';
import { projects } from '../../data/project';
import { ProjectDetail } from '../../components/ProjectDetail/ProjectDetail';

const ProjectDetailPage = () => {
  const { id } = useParams();

  const project = projects.find(
    project => project.id === Number(id)
  );

  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
