import React, { useContext } from 'react';
import { NoteContext } from '../../../state/context';
import AddNote from './AddNote';
import { EditPreviewNote, Flex } from './EditPreviewNote';

export const NotesDetails: React.FC<{}> = () => {
  const {
    state: { selectedNote, isNotesOpen },
  } = useContext(NoteContext);

  let details = null;

  if (selectedNote) {
    details = <EditPreviewNote {...selectedNote} />;
  } else if (isNotesOpen) {
    details = <AddNote />;
  }

  return <Flex>{details}</Flex>;
};
