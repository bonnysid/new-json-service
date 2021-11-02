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
  color: ${COLORS.gray}
`;

export const Label = styled.label<{ isError?: boolean }>`
  font-size: 16px;
  line-height: 20px;
  transition: color .3s ease;
  color: ${({ isError }) => isError ? COLORS.red : COLORS.black};
`;

export const Input = styled.input<{ isError?: boolean }>`
  width: 100%;
  background: ${COLORS.primaryWhite};
  border: 1px solid ${({ isError }) => isError ? COLORS.red : COLORS.primaryBlack + OPACITY['20']};
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
    outline: 2px solid ${COLORS.primaryBlack + OPACITY['20']};
    border-radius: 7px;
  }
`;
