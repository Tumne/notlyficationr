import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/noteContext';
import { Button, Form } from '../common';

const TextArea = styled.textarea`
  padding: 0.5em;
  margin: 0.5em;
  color: 'palevioletred';
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const AddNote = () => {
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
          payload: [{ id: new Date().valueOf().toString(), text }],
        });
        setText('');
      }}
    >
      <TextArea value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" disabled={!text}>
        +
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
