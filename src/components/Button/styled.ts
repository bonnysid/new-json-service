import styled from 'styled-components';
import { COLORS } from 'constants/utils';

export const ButtonWrapper = styled.button`
  padding: 5px 10px;
  background: ${COLORS.blueGradient};
  border-radius: 5px;
  color: ${COLORS.primaryWhite};
  font-size: 16px;
  line-height: 30px;
  transition: all .3s ease;
  width: fit-content;
  
  :disabled {
    background: ${COLORS.grayGradient};
    
    :hover {
      background: ${COLORS.grayGradient};
    }
  }
  
  :focus {
    border: 2px solid ${COLORS.lightBlue};
  }
  
  :hover {
    background: ${COLORS.lightBlueGradient};
  }
  
  :active {
    background: ${COLORS.darkBlueGradient};
  }
`;
