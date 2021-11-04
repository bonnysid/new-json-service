import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.consolePageBG};
  row-gap: 15px;
`;

export const TextareasContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px 15px 0 15px;
`;
