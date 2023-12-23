import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const EditableCell = ({ getValue, row, column, table }: any) => {
  const initialValue = getValue();
  const projectId = row?.original?.id;
  const [value, setValue] = useState(initialValue);

  const debounced = useDebouncedCallback(value => {
    table.options.meta?.updateData(projectId, column.id, value);
  }, 1000);

  useEffect(() => {
    debounced(value);
  }, [value, debounced]);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return <input value={value} onChange={e => setValue(e.target.value)} />;
};
export default EditableCell;
