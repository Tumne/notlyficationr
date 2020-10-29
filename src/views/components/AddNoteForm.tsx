import React, { useContext, useState } from 'react';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/noteContext';
import { Button, Form, Input } from '../common';

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
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" disabled={!text}>
        Add Note
      </Button>
      <Button
        type="button"
        disabled={!notes.length}
        onClick={() => {
          dispatch({ type: TYPE.RESET_NOTES });
        }}
      >
        Clear All
      </Button>
    </Form>
  );
};

export default AddNote;
