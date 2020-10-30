import React, { useContext } from 'react';
import { TYPE } from '../../../state/notes/constants';
import { NoteContext } from '../../../state/notes/context';
import { Clickable } from '../../common';
import { Trash } from '@styled-icons/ionicons-outline/Trash';
import styled from 'styled-components';

const DeleteIcon = styled(Trash)`
  padding: 0 7px 2px;
  color: grey;

  :hover {
    color: #db4d52;
  }
`;

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
      <DeleteIcon />
    </Clickable>
  );
};
