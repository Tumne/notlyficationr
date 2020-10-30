import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { TYPE } from '../../../state/constants';
import { NoteContext } from '../../../state/context';
import LogoSrc from '../../assets/logo.png';
import { Button } from '../../common';

const Container = styled.div`
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

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
`;

const Header: React.FC<{}> = () => {
  const {
    state: { notes, isNotesOpen },
    dispatch,
  } = useContext(NoteContext);

  return (
    <Container>
      <Img src={LogoSrc} />
      <Title>Notlyficationr</Title>
      <ButtonContainer>
        {notes.length ? (
          <>
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
            <ReactTooltip
              type="error"
              backgroundColor="#db4d52"
              id="deleteAllNotes"
              place="bottom"
              effect="solid"
            >
              <h3>Warning! Deletes all notes!</h3>
            </ReactTooltip>
          </>
        ) : null}
        <Button
          variantColor="#349336"
          disabled={isNotesOpen}
          onClick={() => {
            dispatch({ type: TYPE.SET_NOTES_OPEN, payload: true });
          }}
        >
          New Note
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
