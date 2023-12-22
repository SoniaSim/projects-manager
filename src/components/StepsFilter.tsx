import * as Popover from '@radix-ui/react-popover';
import { useState } from 'react';

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
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild>
        <button
          className="border-border bg-btn-background hover:text-text-secondary w-[160px]"
          aria-label="Filtrer par étape"
          onClick={() => setIsOpen(!isOpen)}
        >
          Filtrer par étape
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="rounded-sm bg-btn-background flex flex-col w-[160px] text-left"
          sideOffset={5}
        >
          {(projectSteps || []).map((step: string, index: number) => (
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
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default StepsFilter;
