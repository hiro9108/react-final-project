import { useState, useEffect } from 'react';
import tw from 'twin.macro';
import { css } from '@emotion/react';

import { TableType } from '../../../types';
import {
  Pagenation,
  TextField,
  SyncIcon,
  PlusIcon,
  EditIcon,
  DeleteIcon,
} from '..';

const rootStyle = css`
  margin-bottom: 10rem;
  table {
    ${tw`w-full`}
    margin: 0 auto;
    border-collapse: collapse;
  }
  table th {
    ${tw`bg-gray-600 text-white`}
    white-space: nowrap;
    padding: 1rem 0.5rem;
    text-align: left;
    text-transform: capitalize;
    border-bottom: 0.1rem solid #666666;
  }
  table td {
    padding: 0.5rem;
    border-bottom: 0.1rem solid #666666;
  }
`;

export const Table: React.FC<TableType> = ({
  issues,
  syncIssueHandler,
  createIssueHandler,
  editIssueHandler,
  deleteIssueHandler,
}) => {
  const [initArr, setInitArr] = useState([]);
  const [newArr, setNewArr] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pagePerUnit, setPagePerUnit] = useState(5);

  useEffect(() => {
    setInitArr(issues);
    setNewArr(issues);
  }, [issues]);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchArray = initArr.filter((issue) => {
      return (
        issue.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    setNewArr(searchArray);
  };

  // For Pagenation
  const indexOfLastUser = currentPage * pagePerUnit;
  const indexOfFirstUser = indexOfLastUser - pagePerUnit;
  const currentPost = newArr.slice(indexOfFirstUser, indexOfLastUser);

  const paginationClickHandler = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //

  return (
    <div className="mt-56" css={rootStyle}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex justify-center items-center">
          <TextField
            type="search"
            placefolder="Title Filter..."
            onChange={onChangeSearch}
          />
        </div>
      </div>
      <table>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>state</th>
          <th>url</th>
          <th>created at</th>
          <th>updated at</th>
          <th>
            <PlusIcon onClick={createIssueHandler} />
          </th>
          <th>
            <SyncIcon onClick={syncIssueHandler} />
          </th>
        </tr>
        {currentPost.map((issue) => (
          <tr key={issue.id}>
            <td>{issue.id}</td>
            <td>{issue.title}</td>
            <td>{issue.state}</td>
            <td>{issue.url}</td>
            <td>{issue.created}</td>
            <td>{issue.updated}</td>
            <td>
              <EditIcon onClick={() => editIssueHandler(issue.id)} />
            </td>
            <td>
              <DeleteIcon onClick={() => deleteIssueHandler(issue.id)} />
            </td>
          </tr>
        ))}
      </table>
      <Pagenation
        userDataLength={newArr.length}
        pagePerUnit={pagePerUnit}
        paginationClickHandler={paginationClickHandler}
      />
    </div>
  );
};
