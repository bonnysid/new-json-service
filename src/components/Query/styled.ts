import styled from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 10px;
  padding: 10px;
  cursor: pointer;
  background: ${({ theme }) => theme.historyItemBG};
  border-radius: 10px;
`;

export const Info = styled.div<{ isOpen?: boolean }>`
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  flex-direction: column;
  row-gap: 15px;
  width: 100%;
  height: ${({ isOpen }) => isOpen ? 'fit-content' : '0px'};
  transition: height .3s linear;
  padding: 10px 10px 10px 30px;
  background: ${({ theme }) => theme.historyItemBG};
`;

export const Status = styled.div<{ isSuccess?: boolean }>`
  width: 10px;
  height: 10px;
  background: ${({isSuccess}) => isSuccess ? COLORS.green : COLORS.red};
  border: 1px solid ${({isSuccess}) => isSuccess ? COLORS.darkGreen : COLORS.darkRed};
  border-radius: 50%;
`;

export const QueryResponseBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  column-gap: 15px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 5px;
`;

export const Label = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: ${COLORS.gray};
`;

export const JSONBlock = styled.textarea.attrs({
    disabled: true,
})`
  font-family: UbuntuRegular, sans-serif;
  background: ${({ theme }) => theme.textarea};
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
  height: 100%;
  min-height: 300px;
  resize: none;
`;

export const Action = styled.div`
  font-size: 16px;
  line-height: 20px;
`;

export const StatusText = styled(Action)<{ isSuccess?: boolean }>`
  span {
    color: ${({isSuccess}) => isSuccess ? COLORS.green : COLORS.red}; 
  }
`;
