import { createSlice } from '@reduxjs/toolkit';

interface IAuthState {
    isAuth: boolean;
    token: string | null;
}

const initialState: IAuthState = {
    isAuth: false,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.isAuth = false;
            state.token = null;
        },
    },
});

export default authSlice.reducer;
export const authActions = { ...authSlice.actions };
