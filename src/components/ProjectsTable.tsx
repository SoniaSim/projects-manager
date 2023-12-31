import { Project } from 'type/project';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { EditableCell, DeleteCell, ShowDetailsCell, StatusCell } from './Cell';

const columnHelper = createColumnHelper<Project>();

const columns = [
  columnHelper.accessor(row => row.id, {
    id: 'id',
    header: 'Id',
    cell: info => <div className="font-bold">{info.getValue()}</div>,
  }),
  columnHelper.accessor(row => row.nom, {
    id: 'nom',
    header: 'Nom',
    cell: info => <EditableCell {...info} />,
  }),
  columnHelper.accessor(row => row.description, {
    id: 'description',
    header: 'Description',
    cell: info => <EditableCell {...info} />,
  }),
  columnHelper.accessor(row => row.commentaire, {
    id: 'commentaire',
    header: 'Commentaire',
    cell: info => <EditableCell {...info} />,
  }),
  columnHelper.accessor(row => row.etape, {
    id: 'etape',
    header: 'Etape',
    cell: info => <StatusCell {...info} />,
  }),
  columnHelper.accessor('showAction', {
    id: 'showAction',
    header: '',
    cell: info => <ShowDetailsCell {...info} />,
  }),
  columnHelper.accessor('deleteAction', {
    id: 'deleteAction',
    header: '',
    cell: info => <DeleteCell {...info} />,
  }),
];

const ProjectTable = ({
  projects,
  updateProject,
  deleteProject,
}: {
  projects?: Project[];
  updateProject: (data: any) => void;
  deleteProject: (data: any) => void;
}) => {
  const projectSteps = [
    ...new Set((projects || []).map(({ etape }: any) => etape)),
  ];

  const table = useReactTable({
    data: projects || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (projectId: number, columnId: string, value: string) =>
        updateProject({
          projectId: projectId,
          infos: { [columnId]: value },
        }),
      deleteData: (projectId: number) =>
        deleteProject({
          projectId,
        }),
      projectSteps,
    },
  });

  return (
    <div className="mt-8">
      <table className="w-full table-auto">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className={header.id === 'id' ? 'text-center' : 'text-left'}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  className={
                    cell?.column?.id === 'id' ? 'text-center' : 'text-left'
                  }
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="h-4" />
    </div>
  );
};

export default ProjectTable;
