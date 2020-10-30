import React, { useContext } from 'react';
import styled from 'styled-components';
import { NoteContext } from '../../../state/context';
import AddNote from './AddNote';
import { EditPreviewNote, Flex } from './EditPreviewNote';
import TemplateSrc from '../../assets/templates.png';

const Placeholder = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const NotesDetails: React.FC<{}> = () => {
  const {
    state: { selectedNote, isNotesOpen },
  } = useContext(NoteContext);

  let details = <Placeholder src={TemplateSrc} />;

  if (selectedNote) {
    details = <EditPreviewNote {...selectedNote} />;
  } else if (isNotesOpen) {
    details = <AddNote />;
  }

  return <Flex>{details}</Flex>;
};
