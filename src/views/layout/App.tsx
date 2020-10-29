import React, { useContext } from 'react';
import { NoteContext } from '../../state/noteContext';
import Wrapper from '../common/Wrapper';
import AddNoteForm from '../components/AddNoteForm';
import { EditDeleteNote } from '../components/EditDeleteNote';

const App = () => {
  const {
    state: { notes },
  } = useContext(NoteContext);

  return (
    <Wrapper>
      <AddNoteForm />
      <ul>
        {notes.map((note) => (
          <EditDeleteNote key={note.id} {...note} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default App;
