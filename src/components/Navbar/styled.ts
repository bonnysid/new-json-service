import styled, { css } from 'styled-components';
import { COLORS } from 'constants/utils';
import { ReactComponent as FullScreen } from 'assets/icons/full-screen.svg';
import { ReactComponent as FullScreenClose } from 'assets/icons/fullscreen-close.svg';
import { ReactComponent as LogoutSvg } from 'assets/icons/log-out.svg';
import React from 'react';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  background: ${({ theme }) => theme.headerBG};
  border-bottom: 1px solid ${({ theme }) => theme.border};
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const UserInfo = styled.div`
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.border};
  font-size: 16px;
  line-height: 20px;
  
  span {
    color: ${({ theme }) => theme.border};
    user-select: none;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  font-size: 16px;
  line-height: 20px;
  height: 100%;
  transition: opacity .3s ease;
  
  :hover {
    opacity: 0.7;
  }
`;

export const LinkButton = styled.button<{ isActive?: boolean }>`
  font-size: 20px;
  line-height: 30px;
  ${({ isActive }) => isActive && css`color: ${COLORS.blue};`}
  
  :hover {
    color: ${COLORS.blue};
  }
`;

export const Logo = styled.img.attrs({
  src: '/icons/logo.svg',
  width: 115,
  height: 30,
  alt: 'logo',
})`
  cursor: pointer;
`;

export const ControlsBlock = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  column-gap: 30px;
`;

const fullscreenCss = css`
  cursor: pointer;
  transition: all .3s ease;
  stroke: ${({ theme }) => theme.svgStroke};

  :hover {
    stroke: ${COLORS.blue};
  }


  :focus {
    border: 2px solid ${COLORS.lightBlue};
  }
`;

export const FullscreenButton = styled(FullScreen)`
  ${fullscreenCss}
`;

export const FullscreenCloseButton = styled(FullScreenClose)`
  ${fullscreenCss}
`;

export const LogoutIcon = styled(LogoutSvg)`
  stroke: ${({ theme }) => theme.text};
`;

