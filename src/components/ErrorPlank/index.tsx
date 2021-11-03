import React, { FC } from 'react';
import * as ST from './styled';

interface IProps {
    errorTitle?: string;
    errorMessage: string;
    display?: boolean;
}

const ErrorPlank: FC<IProps> = ({ errorMessage, errorTitle, display = true }) => {
    return display ? (
        <ST.Wrapper>
            <ST.ErrorIcon />
            <ST.Title>{errorTitle}</ST.Title>
            <ST.Description>{errorMessage}</ST.Description>
        </ST.Wrapper>
    ) : null;
};

export default ErrorPlank;
