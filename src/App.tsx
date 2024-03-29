import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter } from 'react-router-dom';
import { persistor } from 'store';
import AppRouter from './router';
import { GlobalStyle } from 'styled';
import { ThemeProvider } from 'styled-components';
import { useTypedSelector } from 'hooks/useTypedSelector';
import ThemeToggler from 'components/ThemeToggler';
import { Themes } from 'store/reducers/console';
import { darkTheme, lightTheme } from 'constants/utils';

const client = new QueryClient();

function App() {
    const theme = useTypedSelector(state => state.console.theme);
    const isLightTheme = theme === Themes.light;

    return (
        <HashRouter basename={process.env.PUBLIC_URL}>
            <QueryClientProvider client={client}>
                <PersistGate persistor={persistor}>
                    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
                        <ThemeToggler isLightTheme={isLightTheme} />
                        <GlobalStyle />
                        <AppRouter />
                    </ThemeProvider>
                </PersistGate>
            </QueryClientProvider>
        </HashRouter>
    );
}

export default App;
