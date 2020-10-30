import React from 'react';
import styled from 'styled-components';
import { Stack } from '../../common';

const Container = styled(Stack)`
  border: none;
  background: #303235;
`;

export const Menu: React.FC<{}> = () => {
  return <Container />;
};
