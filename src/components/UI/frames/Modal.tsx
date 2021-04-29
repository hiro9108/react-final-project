import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ModalFrame from 'react-modal';
import { v4 as uuidv4 } from 'uuid';

import { Form } from '..';
import { ModalType } from '../../../types';
import {
  createIssue,
  updateIssue,
} from '../../../infrastructure/store/data/dataSlice';

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex: 100,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.85)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Modal: React.FC<ModalType> = ({ updateIssueArr, isModalOpen }) => {
  const [isCondition, setIsCondition] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsCondition(isModalOpen.isOpen);
    return () => {
      setIsCondition(false);
    };
  }, [isModalOpen]);

  const updateSpecificIssue = (id, title, state, url, created, updated) => {
    const passData = {
      id,
      title,
      state,
      url,
      created,
      updated,
      checkId: updateIssueArr[0].id,
    };

    for (let key of Object.keys(passData)) {
      if (!passData[key]) passData[key] = updateIssueArr[0][key];
    }
    dispatch(updateIssue(passData));
  };

  // check useCallback function
  const onSubmitHandler = ({ id, title, state, url, created, updated }) => {
    console.log(isModalOpen);

    if (isModalOpen.isEdit) {
      updateSpecificIssue(id, title, state, url, created, updated);
    } else {
      dispatch(
        createIssue({
          id: uuidv4(),
          title,
          state,
          url,
          created,
          updated,
        })
      );
    }
    setIsCondition(false);
  };

  const onCancelHandler = useCallback(() => {
    setIsCondition(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsCondition(false);
  }, []);

  return (
    <ModalFrame
      isOpen={isCondition}
      onAfterOpen={null}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      {isModalOpen.isEdit ? (
        <>
          <h2>Update Issue</h2>
          <br />
          <Form
            onSubmitHandler={onSubmitHandler}
            onCancelHandler={onCancelHandler}
            textId={updateIssueArr[0].id}
            textTitle={updateIssueArr[0].title}
            textState={updateIssueArr[0].state}
            textUrl={updateIssueArr[0].url}
            textCreated={updateIssueArr[0].created}
            textUpdated={updateIssueArr[0].updated}
          />
        </>
      ) : (
        <>
          <h2>Add New Issue</h2>
          <br />
          <Form
            onSubmitHandler={onSubmitHandler}
            onCancelHandler={onCancelHandler}
          />
        </>
      )}
      <br />
    </ModalFrame>
  );
};
