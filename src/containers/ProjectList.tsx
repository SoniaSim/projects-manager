import { useQuery } from 'react-query';
import { GET_PROJECTS } from 'api/projects';
import ProjectTable from 'components/ProjectsTable';
import { Project } from 'type/project';
import { useState } from 'react';
import NewProjectFormModal from 'components/NewProjectFormModal';

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: projects, isLoading } = useQuery<Project[]>(
    'projects',
    GET_PROJECTS,
  );

  if (isLoading) {
    return;
  }

  const maxNumberId: number =
    Math.max(...(projects || []).map(({ id }: any) => id)) || 0;

  return (
    <div className="p-8">
      <div className="flex justify-between">
        <h1>Projets</h1>
        <div className="card">
          <button onClick={() => setIsModalOpen(true)}>
            Ajouter un nouveau projet
          </button>
        </div>
      </div>
      <ProjectTable projects={projects} />

      <NewProjectFormModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        maxNumberId={maxNumberId}
      />
    </div>
  );
};

export default ProjectList;
