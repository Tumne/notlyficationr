import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/noteContext';
import { Button, Form } from '../common';

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: 'palevioletred';
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const TextArea = styled.textarea`
  height: 100px;
  padding: 0.5em;
  margin: 0.5em;
  color: 'palevioletred';
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const AddNote = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const {
    state: { notes },
    dispatch,
  } = useContext(NoteContext);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: TYPE.ADD_NOTE,
          payload: [{ id: new Date().valueOf().toString(), title, text }],
        });
        setText('');
        setTitle('');
      }}
    >
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <TextArea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          console.log(e.target.value.toString());
        }}
        placeholder="Add text here..."
      />
      <Button type="submit" disabled={!title || !text}>
        Save
      </Button>
      <Button
        type="button"
        disabled={!notes.length}
        onClick={() => {
          dispatch({ type: TYPE.RESET_NOTES });
        }}
      >
        Reset
      </Button>
    </Form>
  );
};

export default AddNote;
