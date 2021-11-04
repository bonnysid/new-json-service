import styled from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 10px 15px;
  min-height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  overflow: hidden;
  background: ${({ theme }) => theme.headerBG};
  cursor: pointer;
`;

export const Slider = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  column-gap: 10px;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 50px;
  background: ${({ theme }) => theme.headerBG};
  border-left: 1px solid ${({ theme }) => theme.border};
  transition: opacity .3s ease;

  :hover {
    opacity: 0.7;
  }
`;

export const ClearIcon = styled(Cross)`
  stroke: ${({ theme }) => theme.svgStroke};
`;
