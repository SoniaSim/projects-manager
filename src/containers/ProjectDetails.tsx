import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { GET_PROJECT } from 'api/projects';
import { Project } from 'type/project';

const ProjectInfo = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className="flex gap-4">
      <p className="text-2xl font-bold">{label} :</p>
      <p className="text-2xl text-text-secondary">{value}</p>
    </div>
  );
};

const ProjectDetails = () => {
  const params = useParams();
  const projectId = Number(params?.projectId);

  const { data: project, isLoading } = useQuery<Project>(
    ['project', projectId],
    () => GET_PROJECT(projectId),
  );

  if (isLoading) {
    return;
  }

  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="pb-8">Détails du projet</h1>
      <ProjectInfo label="Nom" value={project?.nom} />
      <ProjectInfo label="Description" value={project?.description} />
      <ProjectInfo label="Commentaire" value={project?.commentaire} />
      <ProjectInfo label="Étape" value={project?.etape} />
    </div>
  );
};

export default ProjectDetails;
