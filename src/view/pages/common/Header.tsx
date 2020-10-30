import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { TYPE } from '../../../state/constants';
import { NoteContext } from '../../../state/context';
import LogoSrc from '../../assets/logo.png';
import { Button } from '../../common';

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #dedede;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
`;

const Title = styled.h2`
  text-align: center;
  color: black;
  padding-left: 10px;
`;

const AddNote = styled(Button)`
  color: white;
  border-color: #ea5459;
  background: #db4d52;

  :disabled {
    background: pink;
    border-color: pink;
  }

  :not(:disabled):hover {
    background-color: #ea5459;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
`;

const Wrapper: React.FC<{}> = () => {
  const {
    state: { notes, selectedNote },
    dispatch,
  } = useContext(NoteContext);

  return (
    <Header>
      <Img src={LogoSrc} />
      <Title>Notlyficationr</Title>
      <ButtonContainer>
        {notes.length ? (
          <Button
            type="button"
            onClick={() => {
              dispatch({ type: TYPE.RESET_NOTES });
            }}
            data-tip
            data-for="deleteAllNotes"
          >
            Reset
          </Button>
        ) : null}
        <AddNote
          disabled={!selectedNote}
          onClick={() => dispatch({ type: TYPE.UNSET_SELECTED_NOTE })}
        >
          Add Note
        </AddNote>
        <ReactTooltip
          type="error"
          id="deleteAllNotes"
          place="bottom"
          effect="solid"
        >
          <h3 style={{ margin: '10px 0' }}>Warning: Deleting all notes</h3>
        </ReactTooltip>
      </ButtonContainer>
    </Header>
  );
};

export default Wrapper;
