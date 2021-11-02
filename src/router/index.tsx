import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { privateRoutes, publicRoutes, Routes } from './routes';
import { useTypedSelector } from 'hooks/useTypedSelector';

const AppRouter: FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth);

    return isAuth ? (
        <Switch>
            {privateRoutes.map(route => (
                <Route key={route.path} {...route} />
            ))}
            <Redirect to={Routes.CONSOLE} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(route => (
                <Route key={route.path} {...route} />
            ))}
            <Redirect to={Routes.LOGIN} />
        </Switch>
    );
};

export default AppRouter;
