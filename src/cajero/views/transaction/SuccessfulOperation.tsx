import { Alert, AlertTitle, Stack, Typography, Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const SuccessfulOperation: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("auth/login", { replace: true });
        }, 10000);
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <Box sx={{ padding: 8 }}>
            <Stack sx={{ width: '100%' }} spacing={2} alignItems={'center'}>
                <Alert severity="success">
                    <AlertTitle>title</AlertTitle>
                    <Typography>
                        Su extracción de monto $500 en la cuenta N° XX-XXX-XXX fue realizado con <strong>éxito</strong>.
                    </Typography>
                </Alert>
            </Stack>
        </Box>
    );
};