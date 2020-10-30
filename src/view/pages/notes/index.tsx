import React from 'react';
import styled from 'styled-components';
import AddNote from './AddNote';
import { NotesList } from './NotesList';

const Container = styled.div`
  display: flex;
`;
interface NotesProps {}

const Notes: React.FC<NotesProps> = () => {
  return (
    <Container>
      <NotesList />
      <AddNote />
    </Container>
  );
};

export default Notes;
