import { ButtonType } from '../../types';
import tw from 'twin.macro';
import { css } from '@emotion/react';

const buttonStyle = css`
  ${tw`mr-4 px-2 py-1 rounded outline-none bg-gray-600 text-white transition duration-500 ease-in-out hover:bg-white hover:text-gray-600`}
`;

export const Button: React.FC<ButtonType> = ({ children, type, onClick }) => {
  if (type === 'button') {
    return (
      <button type="button" onClick={onClick} css={buttonStyle}>
        {children}
      </button>
    );
  }
  if (type === 'submit') {
    return (
      <button type="submit" onClick={onClick} css={buttonStyle}>
        {children}
      </button>
    );
  }
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};
