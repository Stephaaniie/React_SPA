import React, { useEffect, useReducer, useState } from 'react';

import { orange } from '@mui/material/colors';

import {
    TextField,
    Alert,
    AlertTitle,
    Box,
    Button,
    ButtonGroup,
    Stack,
    FormControl,
} from '@mui/material';

import { PrimerColumna, SegundaColumna, TercerColumna } from '../../utils/interface';
import { authReducer, InitialState } from '../../store/auth';

export const InsertData: React.FC = () => {

    const [ { dni, clave }, dispatch ] = useReducer(authReducer, InitialState)

    const [ focus, setFocus ] = useState('');

    const [ingresoDNITemp, setIngresoDNITemp] = useState('');

    const [ingresoClaveTemp, setIngresoClaveTemp] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch({ type: 'logout' });
            setFocus('');
        }, 20000);
        return () => clearTimeout(timeout);
    }, [dni, clave]);

    const handleButtonPress = (value: string) => {
        if (focus === 'dni') {
            if (dni.length < 8) {
                setIngresoDNITemp(ingresoDNITemp + value);
            }
        } else if (focus === 'clave') {
            if (clave.length < 4) {
                setIngresoClaveTemp(ingresoClaveTemp + value);
            }        
        }
    };

    const handleButtonContinueClick = () => {
        if ((dni && (dni.length >= 7 && dni.length <= 8)) && (clave && clave.length === 4)) {
            dispatch({
                type: 'login',
                payload: {
                    dni: ingresoDNITemp,
                    clave: ingresoClaveTemp,
                }
            });

            window.location.href = '/operaciones';
        } else {
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error" variant="filled">
                    <AlertTitle>Error</AlertTitle>
                    <strong>Datos Incorrectos</strong>
                </Alert>
            </Stack>
        }
    };

    const handleButtonKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            handleButtonContinueClick();
        }
    };

    const handleClearClick = () => {
        setIngresoDNITemp('');
        setIngresoClaveTemp('');
    };

    const createButton = (array: { id: string; value: string; name: string; }[]) => {
        return (
            array.map((item) => (
                <Button key={item.id} onClick={() => handleButtonPress(item.value)}>{item.value}</Button>
            ))
        );
    }

    return (
        <>
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
                    <TextField
                        label="DNI"
                        value={ingresoDNITemp}
                        onClick={() => handleButtonPress(dni)}
                        onFocus={() => setFocus('dni')}
                        inputProps={{ maxLength: 8 }} />
                </FormControl>
                <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                    <TextField
                        label="Clave"
                        value={ingresoClaveTemp}
                        onClick={() => handleButtonPress(clave)}
                        onFocus={() => setFocus('clave')}
                        inputProps={{ maxLength: 4 }} />
                </FormControl>
            </Box>
            <Box sx={{
                display: 'flex', '& > *': { m: 0.5, },
                p: 3,
                border: 2,
                borderColor: orange[800],
                height: 240,
                gridColumn: '4',
                gridRow: '2 / 3',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                    sx={{ boxShadow: 0 }}
                >
                    {createButton(PrimerColumna)}
                    <Button
                        disabled={!dni || !clave}
                        onClick={handleButtonContinueClick}
                        onKeyDown={handleButtonKeydown}
                        key="continue"
                        variant="contained"
                    >
                        Continuar
                    </Button>
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                    sx={{ boxShadow: 0 }}
                >
                    {createButton(SegundaColumna)}
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                    sx={{ boxShadow: 0 }}
                >
                    {createButton(TercerColumna)}
                    <Button onClick={handleClearClick}>Borrar</Button>
                </ButtonGroup>
            </Box>
        </>
    );
}
