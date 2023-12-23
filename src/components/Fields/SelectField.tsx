import { useFormContext, Controller } from 'react-hook-form';
import Select from '../Select';
import { useState } from 'react';

const SelectField = ({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) => {
  const {
    control,
    formState: { errors },
    getValues,
  } = useFormContext();

  const error: any = errors[name];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            trigger={
              <button
                className="border-border bg-btn-background hover:text-text-secondary w-[160px]"
                aria-label="Filtrer par étape"
                onClick={() => setIsOpen(!isOpen)}
              >
                {getValues(name) ?? options[0]}
              </button>
            }
            content={(options || []).map((step: string, index: number) => (
              <button
                key={index}
                className="border-none text-left hover:text-text-secondary"
                onClick={() => {
                  field.onChange(step), setIsOpen(!isOpen);
                }}
              >
                {step}
              </button>
            ))}
          />
        )}
      />

      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};
export default SelectField;
