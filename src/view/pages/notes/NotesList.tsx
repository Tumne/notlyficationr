import React, { useContext } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../state/constants';
import { NoteContext } from '../../../state/context';
import { Clickable, Stack } from '../../common';

const Note = styled.div`
  border-bottom: 1px solid #dedede;
`;

const NoteButton = styled(Clickable)<{ isSelected?: boolean }>`
  ${({ isSelected }) => isSelected && 'border-left: 5px solid #db4d52;'}
  background: ${({ isSelected }) => (isSelected ? 'white' : '#fbfbfb')};
  padding-left: ${({ isSelected }) => (isSelected ? 15 : 20)}px;
`;

export const NotesList: React.FC<{}> = () => {
  const {
    state: { notes, selectedNote },
    dispatch,
  } = useContext(NoteContext);

  return (
    <Stack>
      {notes.map(({ id, title, text }) => (
        <NoteButton
          key={id}
          onClick={() =>
            dispatch({ type: TYPE.SET_SELECTED_NOTE, payload: id })
          }
          isSelected={selectedNote?.id === id}
        >
          <Note>
            <h3>{title}</h3>
            {text}
          </Note>
        </NoteButton>
      ))}
    </Stack>
  );
};
