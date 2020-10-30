import styled from 'styled-components';

const Button = styled.button`
  background: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 3px;
  outline: none;

  :disabled {
    border-color: #b7b7b7;
    cursor: default;
  }
  :not(:disabled):hover {
    background-color: #f5f5f5;
  }
`;

const Clickable = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  display: block;
  color: inherit;
`;

export { Button, Clickable };
