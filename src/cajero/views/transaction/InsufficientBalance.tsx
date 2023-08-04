import { Alert, AlertTitle, Box, Button, Stack, ButtonGroup } from '@mui/material';

export const InsufficientBalance: React.FC = () => {
    return (
        <Box sx={{ padding: 8 }} >
            <Stack sx={{ width: '100%' }} spacing={2} alignItems={'center'}>
                <Alert severity="info">
                    <AlertTitle>Su saldo es insuficiente.</AlertTitle>
                    
                    <strong>Puede consultar su saldo, probar con otro monto o cancelar la operación</strong>
                </Alert>
            </Stack>
            <Box sx={{ '& button': { m: 1 } }} paddingLeft={45} >
                <ButtonGroup >
                    <Button variant="contained" size="medium">
                        Cancelar
                    </Button>
                    <Button variant="contained" size="medium">
                        Consultar saldo
                    </Button>
                    <Button variant="contained" size="medium">
                        Otro monto
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
};