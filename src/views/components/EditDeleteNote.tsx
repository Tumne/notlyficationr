import React, { useContext } from 'react';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/noteContext';
import { Button } from '../common';

interface Props {
  id: string;
  text: string;
}

export const EditDeleteNote: React.FC<Props> = ({ id, text }) => {
  const { dispatch } = useContext(NoteContext);

  return (
    <li key={id}>
      {text}
      <Button>Edit</Button>
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
