import { Alert, AlertTitle, Stack, Box } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const OperationCanceled: React.FC = () => {
    
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("auth/login", { replace: true });
        }, 5000);
        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <Box sx={{ padding: 8, width: '100%' }} >
            <Stack sx={{ width: '100%' }} spacing={2} alignItems={'center'}>
                <Alert severity="warning" aria-setsize={20}>
                    <AlertTitle >Warning</AlertTitle>
                        La operación ha sido <strong>cancelada.</strong>
                </Alert>
            </Stack>
        </Box>
    );
};