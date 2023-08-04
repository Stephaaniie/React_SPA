import React from 'react';

import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
    Box,
    FormControl,
    OutlinedInput,
    InputAdornment,
    IconButton,
    InputLabel
} from '@mui/material';
import { orange } from '@mui/material/colors';

import { useState, useEffect } from "react";
import { AuthLogin } from '../../utils/interface';

export const InsertData: React.FC = () => {

    const [credentials, setCredentials] = useState<AuthLogin>({
        dni: "",
        clave: ""
    });

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCredentials({ dni: "", clave: "" });
        }, 20000);

        return () => {
            clearTimeout(timeout);
        };
    }, [credentials]);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    return (
        <Box
            sx={{
                border: "1px solid",
                p: 6,
                m: 1,
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
                color: orange[800],
                width: 500,
                height: 300,
                gridColumn: '2',
                gridRow: '2 / 3',
            }}
        >
            <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">DNI</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'DNI'}
                    label="DNI"
                />
            </FormControl>
            <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Clave</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'clave'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Clave"
                />
            </FormControl>
        </Box>
    );
}
