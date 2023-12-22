import { useFormContext } from 'react-hook-form';

const TextField = ({ name, label }: { name: string; label: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error: any = errors[name];

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name)}
        autoComplete="off"
        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
        className="border rounded-sm p-2"
        id={name}
      />
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default TextField;
