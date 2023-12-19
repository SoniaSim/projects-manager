import { Project } from 'type/project';
const ProjectTable = ({ projects }: { projects?: Project[] }) => {
  console.log(projects);
  return <div>Tableau des projets</div>;
};

export default ProjectTable;
