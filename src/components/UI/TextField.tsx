import { TextFieldType } from '../../types';

export const TextField = ({
  type,
  name,
  placefolder,
  onChange,
}: TextFieldType) => {
  if (type === 'text') {
    return (
      <input
        type="text"
        name={name}
        placeholder={placefolder}
        className="mr-4 px-2 py-1 rounded outline-none bg-red-200"
        onChange={onChange}
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
        className="hidden mr-4 px-2 py-1 rounded outline-none sm:block"
        onChange={onChange}
      />
    );
  }
  return <input type={type} placeholder={placefolder} />;
};
