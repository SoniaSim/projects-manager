import { useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import Select from '../Select';

const StepCell = ({ getValue, row, column, table }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const initialValue = getValue();
  const projectId = row?.original?.id;
  const projectSteps = table.options.meta?.projectSteps;

  const handSelectStep = (step: string) => {
    table.options.meta?.updateData(projectId, column.id, step);
  };

  return (
    <Select
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      trigger={
        <button
          className="border-none w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between">
            {initialValue}
            <AiOutlineDown />
          </div>
        </button>
      }
      content={(projectSteps || []).map((step: string, index: number) => (
        <button
          key={index}
          className="border-none text-left hover:text-text-secondary"
          onClick={() => {
            handSelectStep(step);
            setIsOpen(!isOpen);
          }}
        >
          {step}
        </button>
      ))}
    />
  );
};

export default StepCell;
