import { css } from '@emotion/react';
import { PagenationType } from '../../types';

const rootStyle = css`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem;
`;

const listStyle = css`
  margin: 0.4rem 0.8rem;
  color: lightblue;
  background-color: white;
  border: 1px solid lightblue;
  box-shadow: 3px 3px 6px rgba(190, 190, 190, 0.514);
  display: inline-block;
  width: 2rem;
  height: 2rem;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.1) translateY(-2px);
    color: white;
    background-color: lightblue;
  }
`;

export const Pagenation: React.FC<PagenationType> = ({
  userDataLength,
  pagePerUnit,
  paginationClickHandler,
}) => {
  const pagenationArray = [];
  const paginationNumber = Math.ceil(userDataLength / pagePerUnit);

  for (let i = 1; i <= paginationNumber; i++) {
    pagenationArray.push(i);
  }

  return (
    <ul css={rootStyle}>
      {pagenationArray.map((el, index) => {
        return (
          <li
            css={listStyle}
            key={index}
            onClick={() => paginationClickHandler(el)}
          >
            {el}
          </li>
        );
      })}
    </ul>
  );
};
