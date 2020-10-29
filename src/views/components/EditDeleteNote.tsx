import React, { useContext, useState } from 'react';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/noteContext';
import { Button, Form, Input } from '../common';

interface Props {
  id: string;
  text: string;
}

export const EditDeleteNote: React.FC<Props> = ({ id, text }) => {
  const { dispatch } = useContext(NoteContext);
  const [toggle, setToggle] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (toggle) {
      dispatch({ type: TYPE.EDIT_NOTE, payload: { id, text: newText } });
    }
    setToggle(!toggle);
  };
  return (
    <Form onSubmit={handleSubmit}>
      {toggle ? (
        <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        text
      )}
      <Button type="button" onClick={handleSubmit}>
        {toggle ? 'Save' : 'Edit'}
      </Button>
      <Button
        type="button"
        onClick={() => {
          dispatch({ type: TYPE.DELETE_NOTE, payload: id });
        }}
      >
        x
      </Button>
    </Form>
  );
};
