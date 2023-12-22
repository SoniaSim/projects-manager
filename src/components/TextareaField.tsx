import { useFormContext } from 'react-hook-form';

const TextAreaField = ({ name, label }: { name: string; label: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error: any = errors[name];

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <textarea
        {...register(name)}
        id={name}
        autoComplete="off"
        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
        className="border rounded-sm min-h-[100px] p-2"
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default TextAreaField;
