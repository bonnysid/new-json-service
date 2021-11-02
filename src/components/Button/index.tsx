import React, { FC } from 'react';
import { FadeLoader } from 'react-spinners';
import { COLORS } from 'constants/utils';
import * as ST from './styled';

interface IProps {
    text?: string;
    isLoading?: boolean;
    disabled?: boolean;
    onClick: () => void;
    className?: string;
}

const Button: FC<IProps> = ({ text, isLoading, children, disabled, onClick, className }) => {
    return (
        <ST.ButtonWrapper onClick={onClick} disabled={disabled} className={className}>
            {isLoading ? <FadeLoader color={COLORS.lightGray} /> : text || children}
        </ST.ButtonWrapper>
    );
};

export default Button;
