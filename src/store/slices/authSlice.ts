import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Auth = {
    token: string;
}

const initialState: Auth = {
    token: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state,action: PayloadAction<Auth>) => {
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.token = '';
        }
    }
})

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;