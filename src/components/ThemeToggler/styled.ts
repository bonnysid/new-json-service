import styled from 'styled-components';
import moon from 'assets/icons/moon.png';
import sun from 'assets/icons/sun.png';

export const ToggleContainer = styled.button<{ lightTheme?: boolean }>`
  position: fixed;
  top: 105px;
  right: -107px;
  z-index: 9999;
  background: ${({ theme }) => theme.gradient};
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  border-radius: 30px 0 0 30px;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  width: 120px;
  height: 50px;
  transition: right .3s linear;
  border-right: none;
  
  :hover {
    right: 0;
  }

  div {
    transition: all 0.3s linear;
    
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const Image = styled.div<{ src: string }>`
  min-width: 30px;
  min-height: 30px;
  background: url(${({ src }) => src}) no-repeat center center;
  background-size: contain;
`;

export const Sun = styled(Image).attrs({ src: sun })``;
export const Moon = styled(Image).attrs({ src: moon })``;
