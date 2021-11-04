import React, { FC } from 'react';
import { useFullScreenHandle } from 'react-full-screen';
import Navbar from 'components/Navbar';
import * as ST from './styled';

const Layout: FC = ({ children }) => {
    const handleFullScreen = useFullScreenHandle();

    return (
        <ST.AppWrapper handle={handleFullScreen}>
            <Navbar
                openFullscreen={handleFullScreen.enter}
                closeFullscreen={handleFullScreen.exit}
                isFullScreen={handleFullScreen.active}
            />
            {children}
        </ST.AppWrapper>
    );
};

export default Layout;
