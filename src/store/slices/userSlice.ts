import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserData = {
    username: string;
    email: string;
    name: string;
    bio: string;
    img_url: string;
    web_url: string;
    cover_img_url: string;
    emailVerified: boolean;
    walletAddress: string;
    walletConnected: boolean;
    followers: [];
    following: [];
    nonce: string;
}

const initialState: UserData = {
    username: '',
    email: '',
    name: '',
    bio: '',
    img_url: '',
    web_url: '',
    cover_img_url: '',
    emailVerified: false,
    walletAddress: '',
    walletConnected: false,
    followers: [],
    following: [],
    nonce: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserData>) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.name = action.payload.name;
            state.bio = action.payload.bio;
            state.img_url = action.payload.img_url;
            state.web_url = action.payload.web_url;
            state.cover_img_url = action.payload.cover_img_url;
            state.emailVerified = action.payload.emailVerified;
            state.walletAddress = action.payload.walletAddress;
            state.walletConnected = action.payload.walletConnected;
            state.followers = action.payload.followers;
            state.following = action.payload.following;
            state.nonce = "";
        },
        logout: (state) => {
            state.username = initialState.username;
            state.email = initialState.email;
            state.name = initialState.name;
            state.bio = initialState.bio;
            state.img_url = initialState.img_url;
            state.web_url = initialState.web_url;
            state.cover_img_url = initialState.cover_img_url;
            state.emailVerified = initialState.emailVerified;
            state.walletAddress = initialState.walletAddress;
            state.walletConnected = initialState.walletConnected;
            state.followers = initialState.followers;
            state.following = initialState.following;
            state.nonce = "";
        },
    }
})

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;