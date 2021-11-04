import styled, { css } from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';
import { ReactComponent as DotsSVG } from 'assets/icons/dots.svg';
import { IDropdownSettings } from 'components/HistoryCarousel/HistoryQuery/index';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${({ theme }) => theme.historyItemBG};
  box-shadow: 0 1px 2px ${COLORS.black + OPACITY['10']};
  border-radius: 5px;
  column-gap: 5px;
  cursor: pointer;
  width: fit-content;
  user-select: none;
`;

export const Status = styled.div<{ isSuccess?: boolean }>`
  min-width: 10px;
  min-height: 10px;
  background: ${({isSuccess}) => isSuccess ? COLORS.green : COLORS.red};
  border: 1px solid ${({isSuccess}) => isSuccess ? COLORS.darkGreen : COLORS.darkRed};
  border-radius: 50%;
`;

export const Action = styled.div`
  font-size: 16px;
  line-height: 20px;
`;

export const Dots = styled(DotsSVG)`

`;

export const Dropdown = styled.div<{ settings: IDropdownSettings }>`
  ${({ settings }) => css`
    position: absolute;
    top: ${settings.top}px;
    left: ${settings.left}px;
    width: ${settings.width}px;
  `}
  padding: 5px 0;
  background: ${({ theme }) => theme.historyItemBG};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  min-width: 133px;
`;

export const DropdownLine = styled.div`
  min-width: 100%;
  min-height: 1px;
  background: ${({ theme }) => theme.border};
  margin: 5px 0;
`;

export enum DropdownButtonType {
    copy = 'copy',
    remove = 'remove',
}

export const DropdownButton = styled.button<{ typeButton?: DropdownButtonType }>`
  padding: 10px 15px;
  font-size: 16px;
  line-height: 20px;
  background: transparent;
  transition: all .3s ease;
  width: 100%;
  
  ${({ typeButton }) => {
    switch (typeButton) {
      case DropdownButtonType.copy:
        return css`
          :hover {
            background: ${COLORS.blue};
            color: ${COLORS.primaryWhite};
          }
        `;
      case DropdownButtonType.remove:
        return css`
          :hover {
            background: ${COLORS.red};
            color: ${COLORS.primaryWhite};
          }
        `;
      default:
        return css`
          :hover {
            background: ${COLORS.blue};
            color: ${COLORS.primaryWhite};
          }
        `;
    }
  }};
`;
