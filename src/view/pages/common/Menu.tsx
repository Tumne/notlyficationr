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
  margin-top: 9px;
  cursor: default;
`;

export const Menu: React.FC<{}> = () => {
  return (
    <Container>
      <IconButton data-tip data-for="registerTip" data-offset="{'left': 10}">
        <InformationCircle />
      </IconButton>
      <ReactTooltip id="registerTip" type="info" place="bottom" effect="solid">
        <h3 style={{ margin: '10px 0' }}>Welcome to Notlyficationr !</h3>
        <p>
          <i>Add</i>, <i>edit</i>, & <i>delete</i> notes <b>effortlessly</b> and{' '}
          <b>serverlessly</b>!
        </p>
      </ReactTooltip>
    </Container>
  );
};
