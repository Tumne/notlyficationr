import React from 'react';
import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { InformationCircle } from '@styled-icons/ionicons-outline/InformationCircle';
import { Clickable, Stack } from '../../common';

const Container = styled(Stack)`
  border: none;
  background: #303235;
`;

const IconButton = styled(Clickable)`
  color: #cfcfcf;
  background: transparent;
  padding: 15px;
  cursor: default;
`;
export const Menu: React.FC<{}> = () => {
  return (
    <Container>
      <IconButton data-tip data-for="registerTip">
        <InformationCircle />
      </IconButton>
      <ReactTooltip id="registerTip" type="info" place="right" effect="solid">
        <h3 style={{ margin: '10px 0' }}>Welcome to Notlyficationr</h3>
        <p>Add, edit, & delete notes effortlessly and serverlessly!</p>
      </ReactTooltip>
    </Container>
  );
};
