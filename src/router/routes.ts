import React from 'react';
import LoginPage from '../pages/LoginPage';
import ConsolePage from '../pages/ConsolePage';
import HistoryPage from '../pages/HistoryPage';

interface IRoute {
    path: string;
    exact?: boolean;
    component: React.ComponentType;
}

export enum Routes {
    CONSOLE = '/',
    LOGIN = '/login',
    HISTORY = '/history',
}

export const privateRoutes: IRoute[] = [
    { path: Routes.CONSOLE, component: ConsolePage, exact: true },
    { path: Routes.HISTORY, component: HistoryPage, exact: true },
];

export const publicRoutes: IRoute[] = [
    { path: Routes.LOGIN, component: LoginPage, exact: true },
];
