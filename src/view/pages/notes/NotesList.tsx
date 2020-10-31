import React, { useContext } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../state/notes/constants';
import { NoteContext } from '../../../state/notes/context';
import { Clickable, Stack } from '../../common';
import ImageSrc from '../../assets/paperairplane.png';

const NoteButton = styled(Clickable)<{ isSelected?: boolean }>`
  ${({ isSelected }) => isSelected && 'border-left: 5px solid #db4d52;'}
  background: ${({ isSelected }) => (isSelected ? 'white' : '#fbfbfb')};
  padding-left: ${({ isSelected }) => (isSelected ? 15 : 20)}px;
  z-index: 1;
`;

const Note = styled.div`
  border-bottom: 1px solid #dedede;

  h3,
  p {
    font-size: 1.17em;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 10px);
  }
`;

const PlaceholderImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 10px;
  width: 50%;
`;

export const NotesList: React.FC<{}> = () => {
  const {
    state: { notes, selectedNoteId },
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
          isSelected={selectedNoteId === id}
        >
          <Note>
            <h3>{title}</h3>
            <p>{text}</p>
          </Note>
        </NoteButton>
      ))}
      <PlaceholderImg src={ImageSrc} />
    </Stack>
  );
};
