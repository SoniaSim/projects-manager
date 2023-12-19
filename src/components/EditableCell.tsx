import { useDebouncedCallback } from 'use-debounce';

const EditableCell = ({ getValue, row, column, table }: any) => {
  const initialValue = getValue();

  const debounced = useDebouncedCallback(value => {
    table.options.meta?.updateData(row.index, column.id, value);
  }, 1000);

  return (
    <input
      defaultValue={initialValue}
      onChange={e => debounced(e.target.value)}
      disabled={column.id === 'id'}
    />
  );
};
export default EditableCell;
