import styled from 'styled-components';
import { COLORS, OPACITY } from 'constants/utils';

export const Wrapper = styled.div`
  display: grid;
  background: ${COLORS.red + OPACITY['10']};
  border-radius: 5px;
  width: 100%;
  height: fit-content;
  padding: 10px;
  grid-template-areas: 
          'icon title'
          'icon desc';
  grid-auto-columns: 24px auto;
  column-gap: 8px;
`;

export const Title = styled.div`
  grid-area: title;
  font-size: 18px;
  line-height: 30px;
  color: ${COLORS.red};
`;

export const Description = styled.div`
  grid-area: desc;
  font-size: 12px;
  line-height: 20px;
  color: ${COLORS.red};
`;

export const ErrorIcon = styled.img.attrs({
    src: '/icons/meh.svg',
    alt: 'error image',
    width: 24,
    height: 24,
})`
  position: relative;
  top: 2px;
  grid-area: icon;
`;
