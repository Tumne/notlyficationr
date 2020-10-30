import React, { useContext } from 'react';
import { NoteContext } from '../../../state/context';
import AddNote from './AddNote';
import { EditPreviewNote, Flex } from './EditPreviewNote';

export const NotesDetails: React.FC<{}> = () => {
  const {
    state: { selectedNote },
  } = useContext(NoteContext);

  return (
    <Flex>
      {selectedNote ? <EditPreviewNote {...selectedNote} /> : <AddNote />}
    </Flex>
  );
};
