import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuerySendsayResponse, ISendsayRequest } from 'api/console';

export interface IQueryHistoryItem {
    id?: number | string;
    content: ISendsayRequest;
    response?: IQuerySendsayResponse;
    isSuccess?: boolean;
}

export enum Themes {
    dark = 'dark',
    light = 'light',
}

interface IConsoleState {
    history: IQueryHistoryItem[];
    savedHistory: IQueryHistoryItem[];
    theme: Themes;
}

const initialState: IConsoleState = {
    history: [],
    savedHistory: [],
    theme: Themes.light,
};

const MAX_HISTORY_ITEMS = 20;

const consoleSlice = createSlice({
    name: 'console',
    initialState,
    reducers: {
        addToHistory: (state, action: PayloadAction<IQueryHistoryItem>) => {
            if (state.history.length >= MAX_HISTORY_ITEMS) {
                state.history.pop();
            }
            state.history.unshift(action.payload);
            state.savedHistory.unshift(action.payload);
        },
        clearHistory: (state) => {
            state.history = [];
        },
        deleteFromHistory: (state, action: PayloadAction<IQueryHistoryItem>) => {
            state.history = state.history.filter(item => item.id !== action.payload.id);
        },
        toggleTheme: state => {
            state.theme = state.theme === Themes.light ? Themes.dark : Themes.light;
        }
    },
});

export const consoleActions = consoleSlice.actions;
export default consoleSlice.reducer;
