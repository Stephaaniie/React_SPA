import React, { useEffect, useState } from 'react';
import { reqResApi } from '../../api/reqResApi';
import { orange } from '@mui/material/colors';

import {
    TextField,
    Box,
    Button,
    ButtonGroup,
    FormControl,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

import { PrimerColumna, SegundaColumna, TercerColumna } from '../../utils/interface';
import { isDisabled } from '../../hooks/useLogin';
import { useAuth } from '../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

export const InsertData: React.FC = () => {

    const [focus, setFocus] = useState('');

    const [dni, setdni] = useState('');

    const [password, setpassword] = useState('');

    const [open, setOpen] = useState(false);

    const auth = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleClearClick();
            setFocus('');
        }, 20000);
        return () => clearTimeout(timeout);
    }, [password, dni]);

    const handleClearClick = () => {
        setdni('');
        setpassword('');
    };

    const handleButtonPress = (value: string) => {
        if (focus === 'dni') {
            setdni(dni + value);
        } else if (focus === 'password') {
            setpassword(password + value);
        }
    };

//history react-router-dom

    const handleButtonContinue = () => {
        reqResApi.post('/customer/login', {
            dni: dni,
            password: password
        })
        .then((resp) => {
            if (resp.data.token) {
                auth.setAccessTokenOnly(resp.data.token);
                navigate("auth/options", { replace: true });
            }
        }).catch((error) => {
            console.log(error);
            setOpen(true);
        });
    }

    const handleButtonKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter') {
            handleButtonContinue();
        }
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
            <Box sx={{ width: '100%' }}>
                <Dialog
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"DNI ó PASSWORD INCORRECTO."}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Los datos ingresados son incorrectos por favor, volver a intentarlo nuevamente.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => { setOpen(false); }} autoFocus>
                            <var>Cerrar</var>
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
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
                        value={dni}
                        onClick={() => handleButtonPress(dni)}
                        onFocus={() => setFocus('dni')}
                        inputProps={{ maxLength: 8 }} />
                </FormControl>
                <FormControl sx={{ m: 1, width: '45ch' }} variant="outlined">
                    <TextField
                        label="Password"
                        value={password}
                        onClick={() => handleButtonPress(password)}
                        onFocus={() => setFocus('password')}
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
                        disabled={isDisabled(dni, password) ? false : true}
                        onClick={handleButtonContinue}
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