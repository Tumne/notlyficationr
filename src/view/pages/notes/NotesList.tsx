import React, { useContext } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../../state/notes/constants';
import { NoteContext } from '../../../state/notes/context';
import { Clickable, Stack } from '../../common';
import ImageSrc from '../../assets/paperairplane.png';
import DeleteNote from './operations/DeleteNote';

const Note = styled.div`
  position: relative;
  z-index: 1;
`;

const NoteButton = styled(Clickable)<{ isSelected?: boolean }>`
  width: 100%;
  ${({ isSelected }) => isSelected && 'border-left: 5px solid #db4d52;'}
  background: ${({ isSelected }) => (isSelected ? 'white' : '#fbfbfb')};
  padding-left: ${({ isSelected }) => (isSelected ? 15 : 20)}px;
`;

const Details = styled.div`
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

const NotesList: React.FC<{}> = () => {
  const {
    state: { notes, selectedNoteId },
    dispatch,
  } = useContext(NoteContext);

  return (
    <Stack>
      {notes.map(({ id, title, text }) => (
        <Note key={id}>
          <NoteButton
            onClick={() =>
              dispatch({ type: TYPE.SET_SELECTED_NOTE, payload: id })
            }
            isSelected={selectedNoteId === id}
          >
            <Details>
              <h3>{title}</h3>
              <p>{text}</p>
            </Details>
          </NoteButton>
          <DeleteNote id={id} isFloated />
        </Note>
      ))}
      <PlaceholderImg src={ImageSrc} />
    </Stack>
  );
};

export default NotesList;
