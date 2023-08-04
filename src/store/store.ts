import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import settingsReducer from "./setting/settingState";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer} from "redux-persist";
import { authSlice } from "./auth";
import { cajeroSlice } from "./cajero";

const persistSettingConfig = {
    key: 'setting',
    storage,
    whitelist: ['themeMode']
};

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cajero: cajeroSlice.reducer,
        settings: persistReducer<ReturnType<typeof settingsReducer>>( 
            persistSettingConfig, 
            settingsReducer
        )
    },
    middleware: (defaultMiddleware) =>
        defaultMiddleware({
            serializableCheck: false
        })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type Thunk = 
    ThunkAction<Promise<unknown>, 
    RootState, 
    unknown,
    Action<string> 
>

export const persistor = persistStore(store);