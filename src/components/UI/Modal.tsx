import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { css } from '@emotion/react';
import ModalFrame from 'react-modal';

import { TextField, Button } from './';
import { createIssue } from '../../infrastructure/store/data/dataSlice';
import { ModalType } from '../../types';

const customStyles = {
  overlay: {
    position: 'fixed',
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

// const customStyles = css`
//   top: 50%;
//   left: 50%;
//   right: auto;
//   bottom: auto;
//   margin-right: -50%;
//   transform: translate(-50%, -50%);
// `;

export const Modal: React.FC<ModalType> = ({ isModalOpen }) => {
  const [isCondition, setIsCondition] = useState(false);

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    setIsCondition(isModalOpen);
    return () => {
      setIsCondition(false);
    };
  }, [isModalOpen]);

  const onSubmitHandler = ({ title, state, url, created, updated }) => {
    dispatch(
      createIssue({
        id: '11111',
        title,
        state,
        url,
        created,
        updated,
      })
    );
    setIsCondition(false);
  };

  const closeModal = useCallback(() => {
    setIsCondition(false);
  }, []);

  const onCancelHandler = useCallback(() => {
    setIsCondition(false);
  }, []);

  return (
    <ModalFrame
      isOpen={isCondition}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h2>Add New Issue</h2>
      <br />
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmitHandler)}>
        <TextField type="text" placefolder="Title" {...register('title')} />
        <br />
        <TextField type="text" placefolder="State" {...register('state')} />
        <br />
        <TextField type="text" placefolder="Url" {...register('url')} />
        <br />
        <TextField
          type="text"
          placefolder="Created at"
          {...register('created')}
        />
        <br />
        <TextField
          type="text"
          placefolder="Updated at"
          {...register('updated')}
        />
        <br />
        <div className="flex justify-center items-center">
          <Button type="submit">Save</Button>
          <Button type="button" onClick={onCancelHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </ModalFrame>
  );
};
