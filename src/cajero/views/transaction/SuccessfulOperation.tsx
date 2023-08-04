import { Alert, AlertTitle, Stack, Typography, Box } from '@mui/material';

export const SuccessfulOperation: React.FC = () => {
    return (
        <Box sx={{ padding: 8 }}>
            <Stack sx={{ width: '100%' }} spacing={2} alignItems={'center'}>
                <Alert severity="success">
                    <AlertTitle>Extracción</AlertTitle>
                    <Typography>
                        Su extracción de monto $500 en la cuenta N° XX-XXX-XXX fue realizado con <strong>éxito</strong>.
                    </Typography>
                </Alert>
            </Stack>
        </Box>
    );
};