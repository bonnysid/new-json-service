import React from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useFullScreenHandle } from 'react-full-screen';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from './store';
import AppRouter from './router';
import { AppWrapper, GlobalStyle } from 'styled';
import Navbar from 'components/Navbar';

const client = new QueryClient();

function App() {
    const handleFullScreen = useFullScreenHandle();

    return (
        <BrowserRouter>
            <QueryClientProvider client={client}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <AppWrapper handle={handleFullScreen}>
                            <GlobalStyle />
                            <Navbar
                                openFullscreen={handleFullScreen.enter}
                                closeFullscreen={handleFullScreen.exit}
                                isFullScreen={handleFullScreen.active}
                            />
                            <AppRouter />
                        </AppWrapper>
                    </PersistGate>
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
