import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginResponse } from 'api/auth';

interface IAuthState {
    isAuth: boolean;
    session: string | null;
    sublogin?: string | null;
    login: string | null;
}

const initialState: IAuthState = {
    isAuth: false,
    session: null,
    login: null,
    sublogin: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.isAuth = false;
            state.session = null;
            state.sublogin = null;
            state.login = null;
        },
        login: (state, action: PayloadAction<ILoginResponse>) => {
            state.isAuth = true;
            state.session = action.payload.session;
            state.sublogin = action.payload.sublogin;
            state.login = action.payload.login;
        }
    },
});

export const authActions = { ...authSlice.actions };
export default authSlice.reducer;
