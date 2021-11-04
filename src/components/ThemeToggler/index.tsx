import React, { FC } from 'react';
import { useActions } from 'hooks/useActions';
import * as ST from './styled';

interface IProps {
    isLightTheme: boolean;
}

const ThemeToggler: FC<IProps> = ({ isLightTheme }) => {
    const { toggleTheme } = useActions();

    return (
        <ST.ToggleContainer lightTheme={isLightTheme} onClick={toggleTheme}>
            <ST.Sun />
            <ST.Moon />
        </ST.ToggleContainer>
    );
};

export default ThemeToggler;
