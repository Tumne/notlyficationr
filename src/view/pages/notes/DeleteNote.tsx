import React, { useContext } from 'react';
import { TYPE } from '../../../state/constants';
import { NoteContext } from '../../../state/context';
import { Clickable } from '../../common';
import { Trash } from '@styled-icons/ionicons-outline/Trash';

interface DeleteNoteProps {
  id: string;
}

export const DeleteNote: React.FC<DeleteNoteProps> = ({ id }) => {
  const { dispatch } = useContext(NoteContext);

  return (
    <Clickable
      type="button"
      width={22}
      onClick={() => {
        dispatch({ type: TYPE.DELETE_NOTE, payload: id });
      }}
    >
      <Trash style={{ padding: '0 7px 2px' }} />
    </Clickable>
  );
};
