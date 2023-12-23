import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  CREATE_PROJECT,
  DELETE_PROJECT,
  GET_PROJECTS,
  UPDATE_PROJECT,
} from 'api/projects';
import ProjectTable from 'components/ProjectsTable';
import { Project } from 'type/project';
import { useState } from 'react';
import NewProjectFormModal from 'components/NewProjectFormModal';
import StepsFilter from 'components/StepsFilter';
import { AiOutlineClose } from 'react-icons/ai';

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stepsFilter, setStepFilter] = useState<string[]>([]);
  const queryClient = useQueryClient();

  const { data: projects, isLoading } = useQuery<Project[]>(
    'projects',
    GET_PROJECTS,
  );

  const { mutate: createProject } = useMutation(CREATE_PROJECT, {
    onSuccess: () => {
      queryClient.invalidateQueries('projects');
    },
  });

  const { mutate: updateProject } = useMutation(
    ({ projectId, infos }: { projectId: number; infos: Project }) =>
      UPDATE_PROJECT(projectId, infos),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('projects');
      },
    },
  );

  const { mutate: deleteProject } = useMutation(
    ({ projectId }: { projectId: number }) => DELETE_PROJECT(projectId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('projects');
      },
    },
  );

  if (isLoading) {
    return;
  }

  const filtredProjects = projects?.filter(
    ({ etape }) => stepsFilter && stepsFilter.includes(etape || ''),
  );

  const projectSteps = [
    ...new Set((projects || []).map(({ etape }: any) => etape)),
  ];

  const maxNumberId: number =
    Math.max(...(projects || []).map(({ id }: any) => id)) || 0;

  return (
    <div className="p-8">
      <div className="flex justify-between mb-8">
        <h1>Projets</h1>
        <div className="card">
          <button onClick={() => setIsModalOpen(true)}>
            Ajouter un nouveau projet
          </button>
        </div>
      </div>
      <StepsFilter
        projectSteps={projectSteps}
        setStepFilter={setStepFilter}
        stepsFilter={stepsFilter}
      />
      <div className="flex flex-row gap-2 my-8">
        {stepsFilter.length > 0 &&
          stepsFilter.map((step, index) => (
            <button
              key={index}
              className="flex flex-row items-center gap-2 cursor-pointer border-none bg-btn-background hover:text-text-secondary p-2 rounded-sm"
              onClick={() =>
                setStepFilter(stepsFilter.filter(item => item !== step))
              }
            >
              <p>{step}</p>
              <AiOutlineClose color="var(--ui-danger)" />
            </button>
          ))}
      </div>
      <ProjectTable
        projects={
          (filtredProjects || [])?.length > 0 ? filtredProjects : projects
        }
        updateProject={updateProject}
        deleteProject={deleteProject}
      />

      <NewProjectFormModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        maxNumberId={maxNumberId}
        projectSteps={projectSteps}
        createProject={createProject}
      />
    </div>
  );
};

export default ProjectList;
