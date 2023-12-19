import { AiOutlineDelete } from 'react-icons/ai';

const DeleteCell = ({ row, table }: any) => {
  return (
    <div className="flex justify-center">
      <AiOutlineDelete
        size={22}
        color="#f97453"
        onClick={() => table.options.meta?.deleteProject(row.index)}
      />
    </div>
  );
};
export default DeleteCell;
