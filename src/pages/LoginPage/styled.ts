import styled from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${COLORS.background};
`;

export const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 520px;
  width: 100%;
  background: ${COLORS.primaryWhite};
  box-shadow: 0 4px 10px ${COLORS.primaryBlack + OPACITY['10']};
  border-radius: 5px;
  padding: 40px 30px;
  row-gap: 20px;
`;

export const Title = styled.h3`
  font-size: 24px;
  line-height: 30px;
`;

