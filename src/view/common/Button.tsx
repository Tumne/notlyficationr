import styled from 'styled-components';

const Button = styled.button<{ width?: number; variantColor?: string }>`
  background: white;
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  cursor: pointer;
  color: ${({ variantColor }) => (variantColor ? 'white' : 'black')};
  border: 1px solid ${({ variantColor }) => variantColor || 'black'};
  background: ${({ variantColor }) => variantColor || 'white'};
  border-radius: 3px;
  outline: none;
  ${({ width }) => width && `width: ${width}px;`}

  :disabled {
    color: #b7b7b7;
    border-color: #b7b7b7;
    background: white;
    cursor: default;
  }

  :not(:disabled):hover {
    background-color: ${({ variantColor }) => variantColor || '#f5f5f5'};
    ${({ variantColor }) => variantColor && 'opacity: 0.85'};
  }
`;

const Clickable = styled.button<{ width?: number }>`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  color: inherit;
  background: none;
  ${({ width }) => width && `width: ${width}px;`}
`;

export { Button, Clickable };
