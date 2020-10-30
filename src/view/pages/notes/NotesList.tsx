import React, { useContext } from 'react';
import styled from 'styled-components';
import { NoteContext } from '../../../state/context';
import { Button } from '../../common';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NotesList: React.FC<{}> = () => {
  const {
    state: { notes },
  } = useContext(NoteContext);

  return (
    <Flex>
      {notes.map(({ id, title, text }) => (
        <Button key={id} onClick={() => console.log(id)}>
          <h3>{title}</h3>
          {text}
        </Button>
      ))}
    </Flex>
  );
};
