import styled, { css } from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';
import { ReactComponent as FullScreen } from 'assets/icons/full-screen.svg';
import { ReactComponent as FullScreenClose } from 'assets/icons/fullscreen-close.svg';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 15px;
  min-height: 50px;
  background: ${COLORS.darkWhite};
  border-bottom: 1px solid ${COLORS.primaryBlack + OPACITY['20']};
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  line-height: 30px;
  color: ${COLORS.black};
`;

export const UserInfo = styled.div`
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid ${COLORS.primaryBlack + OPACITY['20']};
  font-size: 16px;
  line-height: 20px;
  
  span {
    color: ${COLORS.primaryBlack + OPACITY['20']};
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

export const ControlsBlock = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  column-gap: 30px;
`;

const fullscreenCss = css`
  cursor: pointer;
  transition: all .3s ease;
  stroke: ${COLORS.black};

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

