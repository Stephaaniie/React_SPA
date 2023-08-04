/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

import {
    Box,
    Button,
    ButtonGroup,
} from '@mui/material';
import { orange } from '@mui/material/colors';

import { useState, useEffect } from "react";
import { PrimerColumna, SegundaColumna, TercerColumna, AuthLogin } from '../../utils/interface';

export const PanelNumer: React.FC = () => {

    const [credentials, setCredentials] = useState<AuthLogin>({
        dni: "",
        clave: ""
    });

    const handleButtonClick = () => {

        if (credentials.dni === "1234567" && credentials.clave === "1234") {
            window.location.href = "/operaciones";
        } else {
            alert("Datos incorrectos");
        }
    };

    const handleButtonKeydown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === "Enter") {
            handleButtonClick();
        }
    };

    const handleClearClick = () => {
        setCredentials({ dni: "", clave: "" });
    };

    const [insertNumberPanel, setinsertNumberPanel] = useState('');

    const handleClickButtonPanelNumeric = (num: number) => {
        setinsertNumberPanel(insertNumberPanel + num.toString());
    }
    
    useEffect(() => {
        console.log(insertNumberPanel)
        
    }, [insertNumberPanel]);

    const createButton = (array: { id: string; value: number; name: string; }[]) => {
        return (
            array.map((item) => (
                <Button key={item.id} onClick={() => handleClickButtonPanelNumeric(item.value)}>{item.value}</Button>
            ))
        );
    }

    return (
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
                    disabled={!credentials.dni || !credentials.clave || credentials.dni.length < 7 || credentials.dni.length > 8 || credentials.clave.length !== 4}
                    onClick={handleButtonClick}
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
    );
}