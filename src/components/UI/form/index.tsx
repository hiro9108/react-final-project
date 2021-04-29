import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { TextField, Button } from '..';
import { FormType } from '../../../types';

export const Form: React.FC<FormType> = ({
  onSubmitHandler,
  onCancelHandler,
  textId,
  textTitle,
  textState,
  textUrl,
  textCreated,
  textUpdated,
}) => {
  const { register, handleSubmit } = useForm();
  const [textIdCondition, setTextIdCondition] = useState('');
  const [textTitleCondition, setTextTitleCondition] = useState('');
  const [textStateCondition, setTextStateCondition] = useState('');
  const [textUrlCondition, setTextUrlCondition] = useState('');
  const [textCreatedCondition, setTextCreatedCondition] = useState('');
  const [textUpdatedCondition, setTextUpdatedCondition] = useState('');

  useEffect(() => {
    setTextIdCondition(textId);
    setTextTitleCondition(textTitle);
    setTextStateCondition(textState);
    setTextUrlCondition(textUrl);
    setTextCreatedCondition(textCreated);
    setTextUpdatedCondition(textUpdated);
  }, []);

  const onChangeIdHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextIdCondition(e.target.value);
  };
  const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTitleCondition(e.target.value);
  };
  const onChangeStateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextStateCondition(e.target.value);
  };
  const onChangeUrlHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextUrlCondition(e.target.value);
  };
  const onChangeCreatedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextCreatedCondition(e.target.value);
  };
  const onChangeUpdatedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextUpdatedCondition(e.target.value);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmitHandler)}>
      {textId && (
        <>
          <TextField
            type="text"
            placefolder="Id"
            onChange={onChangeIdHandler}
            value={textIdCondition}
            {...register('id')}
          />
          <br />
        </>
      )}
      <TextField
        type="text"
        placefolder="Title"
        onChange={onChangeTitleHandler}
        value={textTitleCondition}
        {...register('title')}
      />
      <br />
      <TextField
        type="text"
        placefolder="State"
        onChange={onChangeStateHandler}
        value={textStateCondition}
        {...register('state')}
      />
      <br />
      <TextField
        type="text"
        placefolder="Url"
        onChange={onChangeUrlHandler}
        value={textUrlCondition}
        {...register('url')}
      />
      <br />
      <TextField
        type="text"
        placefolder="Created at"
        onChange={onChangeCreatedHandler}
        value={textCreatedCondition}
        {...register('created')}
      />
      <br />
      <TextField
        type="text"
        placefolder="Updated at"
        onChange={onChangeUpdatedHandler}
        value={textUpdatedCondition}
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
  );
};
