import { useState, useCallback } from 'react';
import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';

import Layout from '../../components/layout/Layout';
import { Modal, Table } from '../../components/UI';
import { selectUser } from '../../infrastructure/store/users/userSlice';

import {
  syncIssue,
  selectIssues,
  deleteIssue,
} from '../../infrastructure/store/data/dataSlice';

const Dashboard: NextPage = () => {
  const [filterArr, setFilterArr] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState({
    isOpen: false,
    isEdit: false,
  });

  // const user = useSelector(selectUser);
  const issues = useSelector(selectIssues);
  const dispatch = useDispatch();

  const syncIssueHandler = useCallback(() => {
    dispatch(syncIssue());
    alert('Sync');
  }, []);

  const createIssueHandler = useCallback(() => {
    setIsModalOpen({
      isOpen: true,
      isEdit: false,
    });
  }, []);

  const editIssueHandler = useCallback(
    (id) => {
      setFilterArr(issues.filter((issue) => issue.id === id));
      setIsModalOpen({
        isOpen: true,
        isEdit: true,
      });
    },
    [issues]
  );

  const deleteIssueHandler = useCallback((id) => {
    dispatch(deleteIssue(id));
  }, []);

  return (
    <Layout title="dashboard">
      <Modal updateIssueArr={filterArr} isModalOpen={isModalOpen} />
      <Table
        issues={issues}
        syncIssueHandler={syncIssueHandler}
        createIssueHandler={createIssueHandler}
        editIssueHandler={editIssueHandler}
        deleteIssueHandler={deleteIssueHandler}
      />
    </Layout>
  );
};

export default Dashboard;
