import React, { useContext } from 'react';
import styled from 'styled-components';
import { NoteContext } from '../../../state/notes/context';
import { INote } from '../../../state/notes/interfaces';
import TemplateSrc from '../../assets/template.png';
import { Flex } from '../../common';
import AddNote from './operations/AddNote';
import { ViewEditNote } from './operations/ViewEditNote';

const PlaceholderImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const initialNote: INote = {
  id: '',
  title: '',
  text: '',
};

export const NotesDetails: React.FC<{}> = () => {
  const {
    state: { notes, selectedNoteId, isNotesOpen },
  } = useContext(NoteContext);
  const note = notes.find(({ id }) => id === selectedNoteId) || initialNote;

  let details = <PlaceholderImg src={TemplateSrc} />;

  if (selectedNoteId) {
    details = <ViewEditNote {...note} />;
  } else if (isNotesOpen) {
    details = <AddNote />;
  }

  return <Flex>{details}</Flex>;
};
