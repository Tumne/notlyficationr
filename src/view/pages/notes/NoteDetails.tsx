import React, { useContext } from 'react';
import styled from 'styled-components';
import { NoteContext } from '../../../state/notes/context';
import AddNote from './AddNote';
import { EditViewNote } from './EditViewNote';
import TemplateSrc from '../../assets/templates.png';
import { Flex } from '../../common';

const PlaceholderImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const NotesDetails: React.FC<{}> = () => {
  const {
    state: { selectedNote, isNotesOpen },
  } = useContext(NoteContext);

  let details = <PlaceholderImg src={TemplateSrc} />;

  if (selectedNote) {
    details = <EditViewNote {...selectedNote} />;
  } else if (isNotesOpen) {
    details = <AddNote />;
  }

  return <Flex>{details}</Flex>;
};
