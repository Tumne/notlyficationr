import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import { Menu } from '../pages/common/Menu';
import { NotesDetails } from '../pages/notes/NoteDetails';
import { NotesList } from '../pages/notes/NotesList';

const Container = styled.div`
  display: grid;
  grid-template-columns: 70px 2fr 5fr;
`;

const App: React.FC<{}> = () => {
  return (
    <Wrapper>
      <Container>
        <Menu />
        <NotesList />
        <NotesDetails />
      </Container>
    </Wrapper>
  );
};

export default App;
