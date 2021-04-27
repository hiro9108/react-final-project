import { useState, useCallback } from 'react';
import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
// import { Container, Col, Row } from 'react-grid-system';
import tw from 'twin.macro';
import { css } from '@emotion/react';

import {
  selectUser,
  updateName,
} from '../../infrastructure/store/users/userSlice';
import {
  selectIssues,
  createIssue,
  deleteIssue,
} from '../../infrastructure/store/data/dataSlice';

import Layout from '../../components/layout/Layout';
import { Modal } from '../../components/UI';
import {
  SyncIcon,
  EditIcon,
  DeleteIcon,
  PlusIcon,
} from '../../components/UI/icons';

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

const mockData = {
  id: '1111111',
  title: 'React language service performance issue',
  state: 'open',
  url: 'https://api.github',
  created: '2021-04-26T15:43:00Z',
  updated: '2021-04-26T16:09:41Z',
};

const Dashboard: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const user = useSelector(selectUser);
  const issues = useSelector(selectIssues);
  const dispatch = useDispatch();

  const createIssueHandler = useCallback(() => {
    setIsModalOpen(!isModalOpen);
    // dispatch(createIssue(mockData));
  }, []);

  const deleteIssueHandler = useCallback((id) => {
    dispatch(deleteIssue(id));
  }, []);

  const demo = () => {
    dispatch(updateName('Hello'));
  };

  return (
    <Layout title="demo">
      <Modal isModalOpen={isModalOpen} />
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
      {/* <h1>{user}</h1>
        <button onClick={demo} className="bg-red-300">
          demo
        </button> */}
    </Layout>
  );
};

export default Dashboard;
