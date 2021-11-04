import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { Routes } from 'router/routes';
import { LINKS } from 'components/Navbar/data';
import { LOGOUT_LABEL } from 'constants/naming';
import * as ST from './styled';

interface IProps {
    openFullscreen: () => void;
    closeFullscreen: () => void;
    isFullScreen: boolean;
}

const Navbar: FC<IProps> = ({ openFullscreen, isFullScreen, closeFullscreen }) => {
    const { logout } = useActions();
    const { pathname } = useLocation();
    const { push } = useHistory();
    const { sublogin, login, isAuth } = useTypedSelector(state => state.auth);

    const goTo = (url: Routes) => {
        push(url);
    };

    return isAuth ? (
        <ST.Wrapper>
            <ST.LogoBlock>
                <ST.Logo onClick={() => goTo(Routes.CONSOLE)} />
                {LINKS.map(link => <ST.LinkButton key={link.path} onClick={() => goTo(link.path)} isActive={pathname === link.path}>{link.text}</ST.LinkButton>)}
            </ST.LogoBlock>
            <ST.ControlsBlock>
                <ST.UserInfo>{login} <span>:</span> {sublogin}</ST.UserInfo>
                <ST.LogoutButton onClick={logout}>
                    {LOGOUT_LABEL}
                    <ST.LogoutIcon />
                </ST.LogoutButton>
                {isFullScreen ? <ST.FullscreenCloseButton onClick={closeFullscreen} /> : <ST.FullscreenButton onClick={openFullscreen} />}
            </ST.ControlsBlock>
        </ST.Wrapper>
    ) : null;
};

export default Navbar;
