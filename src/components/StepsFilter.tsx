import { useState } from 'react';
import Select from './Select';

const StepsFilter = ({
  projectSteps,
  setStepFilter,
  stepsFilter,
}: {
  projectSteps: string[];
  setStepFilter: any;
  stepsFilter: string[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectFilter = (step: string) => {
    if (stepsFilter.includes(step)) {
      setStepFilter(stepsFilter.filter(item => item !== step));
    } else {
      setStepFilter([...stepsFilter, step]);
    }
  };

  return (
    <Select
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      trigger={
        <button
          className="border-border bg-btn-background hover:text-text-secondary w-[160px]"
          aria-label="Filtrer par étape"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filtrer par étape
        </button>
      }
      content={(projectSteps || []).map((step: string, index: number) => (
        <button
          key={index}
          className="border-none text-left hover:text-text-secondary"
          onClick={() => {
            handleSelectFilter(step);
            setIsOpen(!isOpen);
          }}
        >
          {step}
        </button>
      ))}
    />
  );
};

export default StepsFilter;
