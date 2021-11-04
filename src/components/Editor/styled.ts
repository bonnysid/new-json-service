import styled from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 100%;
`;

export const Label = styled.div<{ isError?: boolean }>`
  font-size: 12px;
  line-height: 20px;
  color: ${COLORS.gray};
`;

export const Textarea = styled.div<{ isError?: boolean }>`
  font-family: UbuntuRegular, sans-serif;
  background: ${({ theme }) => theme.textarea};
  border: 1px solid ${({ isError }) => isError ? COLORS.red :({ theme }) => theme.border};
  box-shadow: ${({ isError }) => isError ? `0 0 5px ${COLORS.red}${OPACITY['50']}` : 'none'};
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  height: 100%;
  
  .jsoneditor-menu, .ace_gutter {
    display: none;
  }
  
  .ace_scroller {
    background: ${({ theme }) => theme.textarea} !important;
    left: 0 !important;
  }
  
  .ace_variable, .ace_paren {
    color: ${({ theme }) => theme.text} !important;
  }
  
  .ace_active-line {
    background: ${({ theme }) => theme.activeLine} !important;
  }
  
  .jsoneditor {
    border: none;
  } 
`;
