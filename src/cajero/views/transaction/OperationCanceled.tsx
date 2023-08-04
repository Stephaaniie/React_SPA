import { Alert, AlertTitle, Stack, Box } from '@mui/material';

export const OperationCanceled: React.FC = () => {
    return (
        <Box sx={{ padding: 8 }} >
            <Stack sx={{ width: '100%' }} spacing={2} alignItems={'center'}>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                        La operación ha sido <strong>cancelada.</strong>
                </Alert>
            </Stack>
        </Box>
    );
};