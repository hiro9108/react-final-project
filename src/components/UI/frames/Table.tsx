import tw from 'twin.macro';
import { css } from '@emotion/react';
import { SyncIcon, PlusIcon, EditIcon, DeleteIcon } from '..';

const rootStyle = css`
  margin-bottom: 10rem;
  table {
    width: 90%;
    margin: 0 auto;
    border-collapse: collapse;
  }
  table th {
    ${tw`bg-red-200`}
    white-space: nowrap;
    padding: 1rem 0.5rem;
    text-align: center;
    text-transform: capitalize;
    border: 0.1rem solid #666666;
  }
  table td {
    padding: 0.5rem;
    /* background-color: #fff; */
    border: 0.1rem solid #666666;
  }
  /* table tr {
    background-color: ${false ? 'red' : 'blue'};
  } */
`;

export const Table = ({ createIssueHandler, deleteIssueHandler, issues }) => {
  return (
    <div className="mt-56" css={rootStyle}>
      <table>
        <div className="flex">
          <PlusIcon onClick={createIssueHandler} />
          <SyncIcon onClick={() => alert('sync')} />
        </div>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>state</th>
          <th>url</th>
          <th>created at</th>
          <th>updated at</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
        {issues.map((issue) => (
          <tr key={issue.id}>
            <td>{issue.id}</td>
            <td>{issue.title}</td>
            <td>{issue.state}</td>
            <td>{issue.url}</td>
            <td>{issue.created}</td>
            <td>{issue.updated}</td>
            <td>
              <EditIcon onClick={() => alert('edit')} />
            </td>
            <td>
              <DeleteIcon onClick={() => deleteIssueHandler(issue.id)} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
