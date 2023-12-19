import { useQuery } from 'react-query';
import { GET_PROJECTS } from 'api/projects';
import ProjectTable from 'components/ProjectsTable';
import { Project } from 'type/project';
const ProjectList = () => {
  const { data: projects, isLoading } = useQuery<Project[]>(
    'projects',
    GET_PROJECTS,
  );

  if (isLoading) {
    return;
  }

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1>Projets</h1>
        <div className="card">
          <button onClick={() => console.log('ici')}>
            Ajouter un nouveau projet
          </button>
        </div>
      </div>
      <ProjectTable projects={projects} />
    </div>
  );
};

export default ProjectList;
