import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { projectId } = useParams();

  return (
    <>
      <h1>Projet numéro {projectId}</h1>
    </>
  );
};

export default ProjectDetails;
