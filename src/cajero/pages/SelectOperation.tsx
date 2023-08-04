import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { ButtonCancel } from '../components';

export const SelectOperations: React.FC = () => {
    return (
        <>
            <Box sx={{ gridColumn: '2' }} alignItems={'center'}>
                <Typography variant="h5" paddingLeft={12} paddingTop={5} paddingBottom={2}
                >Bienvenido</Typography>
                <Typography variant="h6" paddingLeft={12} paddingBottom={2}
                ><strong>¿Que operación deseas realizar?</strong></Typography>
            </Box>
            <Box sx={{ '& button': { m: 4 } }} paddingLeft={60} >
                <ButtonGroup>
                    <Button variant="contained" size="medium">
                        Extracción
                    </Button>
                    <Button variant="contained" size="medium">
                        Depósito
                    </Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ '& button': { m: 4 } }} paddingLeft={65}>
                <ButtonGroup >
                    <Button variant="contained" size="medium">
                        Consulta de saldo
                    </Button>
                </ButtonGroup>
            </Box>
            <ButtonCancel />
        </>
    )
}