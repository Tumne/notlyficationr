import React from 'react';
import styled from 'styled-components';
import Header from '../pages/common/Header';
import { Menu } from '../pages/common/Menu';
import { NotesDetails } from '../pages/notes/NoteDetails';
import { NotesList } from '../pages/notes/NotesList';

const Container = styled.div`
  display: grid;
  grid-template-columns: 70px 400px 1fr;
`;

const App: React.FC<{}> = () => {
  return (
    <>
      <Header />
      <Container>
        <Menu />
        <NotesList />
        <NotesDetails />
      </Container>
    </>
  );
};

export default App;
