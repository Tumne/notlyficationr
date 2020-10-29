import React, { ReactNode } from 'react';
import styled from 'styled-components';
import LogoSrc from '../static/logo.png';

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

interface Props {
  children: ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header>
        <Img src={LogoSrc} />
        <Title>Notlyficationr</Title>
      </Header>
      {children}
    </div>
  );
};

export default Wrapper;
