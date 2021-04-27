import { useState, useCallback } from 'react';
import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
// import { Container, Col, Row } from 'react-grid-system';

import Layout from '../../components/layout/Layout';
import { Modal, Table } from '../../components/UI';

import {
  selectUser,
  updateName,
} from '../../infrastructure/store/users/userSlice';

import {
  selectIssues,
  createIssue,
  deleteIssue,
} from '../../infrastructure/store/data/dataSlice';

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
      <Table
        issues={issues}
        createIssueHandler={createIssueHandler}
        deleteIssueHandler={deleteIssueHandler}
      />
      {/* <h1>{user}</h1>
        <button onClick={demo} className="bg-red-300">
          demo
        </button> */}
    </Layout>
  );
};

export default Dashboard;
