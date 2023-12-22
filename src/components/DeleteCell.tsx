import { AiOutlineDelete } from 'react-icons/ai';

const DeleteCell = ({ row, table }: any) => {
  const projectId = row?.original?.id;
  return (
    <div className="flex justify-center cursor-pointer">
      <AiOutlineDelete
        size={22}
        color="#f97453"
        onClick={() => table.options.meta?.deleteData(projectId)}
      />
    </div>
  );
};
export default DeleteCell;
