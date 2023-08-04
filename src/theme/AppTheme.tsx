import { ThemeProvider } from '@emotion/react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

import { Props } from '../utils/interface/props';
import { OrangeTheme } from "./orangeTheme";

import { useAppSelector } from "../hooks/redoxHooks";

const AppTheme: React.FC<Props> = ({ children }) => {

const themeMode = useAppSelector((state) => state.settings.themeMode);
 
const isLight = themeMode === 'light';

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={OrangeTheme(isLight)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
    
  )
}

export default AppTheme
