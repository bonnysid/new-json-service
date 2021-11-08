import styled from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const OptionalText = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.inputOptional};
`;

export const Label = styled.label<{ isError?: boolean }>`
  font-size: 16px;
  line-height: 20px;
  transition: color .3s ease;
  color: ${({ isError, theme }) => isError ? COLORS.red : theme.text};
`;

export const Input = styled.input<{ isError?: boolean }>`
  width: 100%;
  background: ${({ theme }) => theme.textarea};;
  border: 1px solid ${({ isError, theme }) => isError ? COLORS.red : theme.border};
  box-shadow: ${({ isError }) => isError ? `0px 0px 5px ${COLORS.red + OPACITY['50']}` : 'none'};
  font-size: 18px;
  line-height: 30px;
  border-radius: 5px;
  padding: 5px 10px;
  transition: border .3s ease;
  
  :hover {
    border: 1px solid ${COLORS.primaryBlack + OPACITY['40']};
  }
  
  :focus {
    border: 1px solid ${COLORS.primaryBlack + OPACITY['40']};
    outline: 2px solid ${({ theme }) => theme.border};
    border-radius: 7px;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.textarea} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.text} !important;
    caret-color: ${({ theme }) => theme.text} !important;
  }
`;
