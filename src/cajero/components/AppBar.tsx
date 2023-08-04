import React from 'react';
import { AppBar, Box, Toolbar, FormGroup, FormControlLabel } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/redoxHooks';
import { setThemeMode } from "../../store/setting/settingState";
import { MaterialUISwitch } from '../../style/styleSwitch';

export const AppNavBar: React.FC = () => {
    const { 
        settings: { themeMode }
    } = useAppSelector((state) => state);

    const dispatch = useAppDispatch();

    const handleChangeTheme = (): void => {
        dispatch(setThemeMode(themeMode === 'dark' ? 'light' : 'dark'));
    }
    return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
              label=""
              onClick={handleChangeTheme}
            />
            </FormGroup>
          </Toolbar>
      </AppBar>
    </Box>
  );
}