import React, { useContext, useState } from 'react';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/noteContext';
import { Button, Input } from '../common';

interface Props {
  id: string;
  text: string;
}

export const EditDeleteNote: React.FC<Props> = ({ id, text }) => {
  const { dispatch } = useContext(NoteContext);
  const [toggle, setToggle] = useState(false);
  const [newText, setNewText] = useState(text);

  return (
    <li key={id}>
      {toggle ? (
        <Input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        text
      )}
      <Button
        onClick={() => {
          if (toggle) {
            dispatch({ type: TYPE.EDIT_NOTE, payload: { id, text: newText } });
          }
          setToggle(!toggle);
        }}
      >
        {toggle ? 'Save' : 'Edit'}
      </Button>
      <Button
        onClick={() => {
          dispatch({ type: TYPE.DELETE_NOTE, payload: id });
        }}
      >
        x
      </Button>
    </li>
  );
};
