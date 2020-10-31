import React, { useContext } from 'react';
import { Trash } from '@styled-icons/ionicons-outline/Trash';
import styled from 'styled-components';
import { TYPE } from '../../../../state/notes/constants';
import { NoteContext } from '../../../../state/notes/context';
import { Clickable } from '../../../common';

const DeleteIcon = styled(Trash)`
  padding: 7px;
  margin-bottom: 3px;
  color: grey;

  :hover {
    color: #db4d52;
  }
`;

const DeleteButton = styled(Clickable)<{ isFloated?: boolean }>`
  ${({ isFloated }) =>
    isFloated &&
    `
  position: absolute;
  top: 4px;
  right: 15px;
  `}
`;

interface DeleteNoteProps {
  id: string;
  isFloated?: boolean;
}

export const DeleteNote: React.FC<DeleteNoteProps> = ({
  id,
  isFloated = false,
}) => {
  const { dispatch } = useContext(NoteContext);

  return (
    <DeleteButton
      type="button"
      width={22}
      isFloated={isFloated}
      onClick={() => {
        dispatch({ type: TYPE.DELETE_NOTE, payload: id });
      }}
    >
      <DeleteIcon />
    </DeleteButton>
  );
};
