import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import store, { persistor } from './store';
import AppRouter from './router';
import { AppWrapper, GlobalStyle } from 'styled';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={client}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppWrapper>
                            <GlobalStyle />
                            <AppRouter />
                        </AppWrapper>
                    </PersistGate>
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
