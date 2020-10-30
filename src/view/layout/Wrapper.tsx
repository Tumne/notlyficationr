import React, { ReactNode, useContext } from 'react';
import styled from 'styled-components';
import { TYPE } from '../../state/constants';
import { NoteContext } from '../../state/context';
import LogoSrc from '../assets/logo.png';
import { Button } from '../common';

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

const AddButton = styled(Button)`
  color: white;
  border: none;
  background: #db4d52;

  :not(:disabled):hover {
    background-color: #ea5459;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 0;
`;

interface Props {
  children: ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  const {
    state: { notes },
    dispatch,
  } = useContext(NoteContext);

  return (
    <div>
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
            >
              Reset
            </Button>
          ) : null}
          <AddButton
            onClick={() => dispatch({ type: TYPE.UNSET_SELECTED_NOTE })}
          >
            Add Note
          </AddButton>
        </ButtonContainer>
      </Header>
      {children}
    </div>
  );
};

export default Wrapper;
