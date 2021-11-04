import styled from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  width: 100%;
  height: 100%;
`;

export const Label = styled.div<{ isError?: boolean }>`
  font-size: 12px;
  line-height: 20px;
  color: ${({ isError }) => isError ? COLORS.red : COLORS.gray};
`;

export const Textarea = styled.textarea<{ isError?: boolean }>`
  font-family: UbuntuRegular, sans-serif;
  background: ${({ theme }) => theme.textarea};
  border: 1px solid ${({ isError, theme }) => isError ? COLORS.red : theme.border};
  box-shadow: ${({ isError }) => isError ? `0 0 5px ${COLORS.red}${OPACITY['50']}` : 'none'};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  height: 100%;
  resize: none;
`;
