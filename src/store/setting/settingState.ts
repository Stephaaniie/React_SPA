import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettingState } from "utils/interface/settingState";

const initialState: SettingState = {
    themeMode: 'ligth'
}

const settingsSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<string>) => {
            state.themeMode = action.payload;
        }
    }
});

export const {setThemeMode} = settingsSlice.actions;

export default settingsSlice.reducer;