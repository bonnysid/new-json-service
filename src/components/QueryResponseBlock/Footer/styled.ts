import styled from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';
import { ReactComponent as FormatSvg } from 'assets/icons/format.svg';

export const Wrapper = styled.footer`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.headerBG};
  padding: 15px;
`;

export const FormatIcon = styled(FormatSvg)`
  margin-right: 8px;
`;

export const FormatButton = styled.button`
  display: flex;
  align-items: center;
  stroke: ${({ theme }) => theme.svgStroke};
  padding: 6px 4px;
  font-size: 16px;
  line-height: 20px;

  :hover {
    stroke: ${COLORS.blue};
    color: ${COLORS.blue};
  }

  :focus {
    border: 2px solid ${COLORS.blue + OPACITY['50']};
    border-radius: 7px;
    stroke: ${COLORS.blue};
    color: ${COLORS.blue};
  }
`;

export const GithubLink = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${COLORS.gray};
  transition: opacity .3s ease;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;
