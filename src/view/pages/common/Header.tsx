import React, { useContext } from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { TYPE } from '../../../state/notes/constants';
import { NoteContext } from '../../../state/notes/context';
import LogoSrc from '../../assets/logo.png';
import { Button, Flex } from '../../common';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #dedede;
  background: white;
  z-index: 1;
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
      <Flex
        direction="row"
        alignItems="center"
        data-tip
        data-for="slogan"
        data-offset="{'right': 20, 'top': 20 }"
      >
        <Img src={LogoSrc} />
        <Title>Notlyficationr</Title>
      </Flex>
      <ReactTooltip type="dark" id="slogan" place="bottom" effect="solid">
        <i>Because you can never have too unique of a name...</i>
      </ReactTooltip>
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
          Add Note
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Header;
