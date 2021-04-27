import { ButtonType } from '../../types';

export const Button = ({ children, type, onClick }: ButtonType) => {
  if (type === 'button') {
    return (
      <button
        type="button"
        onClick={onClick}
        className="mr-4 px-2 py-1 rounded outline-none bg-red-200"
      >
        {children}
      </button>
    );
  }
  if (type === 'submit') {
    return (
      <button
        type="submit"
        onClick={onClick}
        className="mr-4 px-2 py-1 rounded outline-none bg-red-200"
      >
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
