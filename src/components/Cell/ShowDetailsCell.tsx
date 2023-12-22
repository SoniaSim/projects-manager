import { AiFillEye } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ShowDetailsCell = ({ row }: any) => {
  const navigate = useNavigate();
  const projectId = row?.original?.id;

  return (
    <div className="flex justify-center cursor-pointer">
      <AiFillEye
        size={22}
        color="#FFCBDD"
        onClick={() => navigate(`${projectId}`)}
      />
    </div>
  );
};
export default ShowDetailsCell;
