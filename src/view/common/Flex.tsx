import styled from 'styled-components';

const Flex = styled.div<{ direction?: string; alignItems?: string }>`
  position: relative;
  display: flex;
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  flex-direction: ${({ direction }) => direction || 'column'};
`;

export default Flex;
