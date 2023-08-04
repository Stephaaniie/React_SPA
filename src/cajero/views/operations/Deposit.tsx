import React from 'react';

import {
    Box,
    Typography,
    FormControl,
    FilledInput,
} from '@mui/material';

import { NumberBoard, ButtonCancel } from '../../../cajero/components';

export const Deposit: React.FC = () => {
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
                    <NumberBoard />
                </Box>
            </Box>
            <ButtonCancel/>
        </>
    );
};
