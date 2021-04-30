import { TextFieldType } from '../../types';
import tw from 'twin.macro';
import { css } from '@emotion/react';

const textFieldStyle = css`
  ${tw`mr-4 px-2 py-1 outline-none w-96 border-b-4 bg-gray-100 transition duration-300 ease-in-out focus:border-red-300　focus:placeholder-gray-100`}
`;

export const TextField: React.FC<TextFieldType> = ({
  type,
  name,
  placefolder,
  onChange,
  value,
}) => {
  if (type === 'text') {
    return (
      <input
        type="text"
        name={name}
        placeholder={placefolder}
        css={textFieldStyle}
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
        css={textFieldStyle}
        onChange={onChange}
      />
    );
  }
  return <input type={type} placeholder={placefolder} />;
};
