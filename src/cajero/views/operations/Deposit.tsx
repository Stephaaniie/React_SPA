import React from 'react';

import {
    Box,
    Typography,
    FormControl,
    FilledInput,
    Button,
    ButtonGroup
} from '@mui/material';

import { ButtonCancel } from '../../../cajero/components';
import { PrimerColumna, SegundaColumna, TercerColumna } from '../../../utils/interface';
import { orange } from '@mui/material/colors';

export const Deposit: React.FC = () => {
    
    function handleClearClick(): void {
        throw new Error('Function not implemented.');
    }

    function createButton(SegundaColumna: { id: string; value: string; name: string; }[]): React.ReactNode {
        throw new Error('Function not implemented.');
    }

    function handleButtonContinueClick(): void {
        throw new Error('Function not implemented.');
    }

    function handleButtonKeydown(): void {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <Box
                sx={{ m: 8 }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-around'}
            >
                <Typography variant="h3" align="center">
                    Depósito
                </Typography>
            </Box>
            <Box
                sx={{ m: 2 }}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-around'}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }} gap={60} >
                    <div>
                        <Box
                            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
                        >
                            <Typography>
                                PESOS
                            </Typography>

                            <Typography
                                 variant='h5'
                                 lineHeight={2}
                                sx={{ alignItems: 'flex-start' }}
                            >
                                $ 100
                            </Typography>
                            <Typography
                                 variant='h5'
                                 lineHeight={2}
                                sx={{ alignItems: 'flex-start' }}
                            >
                                $ 200
                            </Typography>
                            <Typography
                                variant='h5'
                                lineHeight={2}
                                sx={{ alignItems: 'flex-start' }}
                            >
                                $ 500
                            </Typography>
                            <Typography
                                variant='h5'
                                lineHeight={2}
                                sx={{ alignItems: 'flex-start' }}
                            >
                                $ 1.000
                            </Typography>
                        </Box>
                    </div>
                    <div>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
                        >
                            <Typography>
                                CANTIDAD
                            </Typography>
                            <FormControl sx={{ width: '10ch'}} size="small" variant="filled">
                                <FilledInput />
                            </FormControl>
                            <FormControl sx={{ width: '10ch'}} size="small" variant="filled">
                                <FilledInput />
                            </FormControl>
                            <FormControl sx={{ width: '10ch'}} size="small" variant="filled">
                                <FilledInput />
                            </FormControl>
                            <FormControl sx={{ width: '10ch'}} size="small" variant="filled">
                                <FilledInput />
                            </FormControl>
                        </Box>
                    </div>
                </Box>
                <Box>
                    <Box>
                        <Typography variant="h6" align="center">
                            <strong>MONTO A DEPOSITAR</strong>
                        </Typography>
                        <Typography variant="h4" align="center">
                            $0
                        </Typography>
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
                        disabled
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
                </Box>
            </Box>
            <ButtonCancel />
        </>
    );
};
