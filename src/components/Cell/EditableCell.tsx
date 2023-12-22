import { useDebouncedCallback } from 'use-debounce';

const EditableCell = ({ getValue, row, column, table }: any) => {
  const initialValue = getValue();
  const projectId = row?.original?.id;

  const debounced = useDebouncedCallback(value => {
    table.options.meta?.updateData(projectId, column.id, value);
  }, 1000);

  return (
    <input value={initialValue} onChange={e => debounced(e.target.value)} />
  );
};
export default EditableCell;
