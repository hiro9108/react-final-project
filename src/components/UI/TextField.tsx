import { TextFieldType } from '../../types';

export const TextField = ({
  type,
  name,
  placefolder,
  onChange,
  value,
}: TextFieldType) => {
  if (type === 'text') {
    return (
      <input
        type="text"
        name={name}
        placeholder={placefolder}
        className="mr-4 px-2 py-1 rounded outline-none w-96 bg-primary "
        onChange={onChange}
        defaultValue={value}
        required
      />
    );
  }
  if (type === 'search') {
    return (
      <input
        type="search"
        name={name}
        placeholder={placefolder}
        className="mr-4 px-2 py-1 rounded outline-none w-96"
        onChange={onChange}
      />
    );
  }
  return <input type={type} placeholder={placefolder} />;
};
