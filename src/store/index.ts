// import rootReducer from "./reducer";
// import { createStore } from "redux";

// const iniStore = (initialState, options) => {
//     // Check if function is running on the server or client
//     // if (!options.isServer) {
//     //     // Setup Redux Debugger
//     //     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//     // }
//     return createStore(rootReducer, initialState);
// }

// export default iniStore;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
    key: 'persistAuth',
    storage,
}
const persistUserConfig = {
    key: 'persistUser',
    storage,
}

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

const store = configureStore({
    reducer: {
        auth:persistedAuthReducer,
        user: persistedUserReducer
    }
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;