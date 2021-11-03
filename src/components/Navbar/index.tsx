import React, { FC } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import * as ST from './styled';

interface IProps {
    openFullscreen: () => void;
    closeFullscreen: () => void;
    isFullScreen: boolean;
}

const Navbar: FC<IProps> = ({ openFullscreen, isFullScreen, closeFullscreen }) => {
    const { logout } = useActions();
    const { sublogin, login, isAuth } = useTypedSelector(state => state.auth);

    return isAuth ? (
        <ST.Wrapper>
            <ST.LogoBlock>
                <img src='/icons/logo.svg' width={115} height={30} alt='logo' />
                <ST.Title>API-консолька</ST.Title>
            </ST.LogoBlock>
            <ST.ControlsBlock>
                <ST.UserInfo>{login} <span>:</span> {sublogin}</ST.UserInfo>
                <ST.LogoutButton onClick={logout}>
                    Выйти
                    <img src="/icons/log-out.svg" width={24} height={24} alt="logout"/>
                </ST.LogoutButton>
                {isFullScreen ? <ST.FullscreenCloseButton onClick={closeFullscreen} /> : <ST.FullscreenButton onClick={openFullscreen} />}

            </ST.ControlsBlock>
        </ST.Wrapper>
    ) : null;
};

export default Navbar;
