import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { ButtonCancel } from '../components';
import { useNavigate } from 'react-router-dom';

export const SelectOperations: React.FC = () => {

    const navigate = useNavigate();

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
                    <Button variant="contained" size="medium" onClick={() =>  navigate("/extraer", { replace: true })}>
                        Extracción
                    </Button>
                    <Button variant="contained" size="medium" onClick={() =>  navigate("/depositar", { replace: true })}>
                        Depósito
                    </Button>
                </ButtonGroup>
            </Box>
            <Box sx={{ '& button': { m: 4 } }} paddingLeft={65}>
                <ButtonGroup >
                    <Button variant="contained" size="medium" onClick={() =>  navigate("/saldo", { replace: true })}>
                        Consulta de saldo
                    </Button>
                </ButtonGroup>
            </Box>
            <ButtonCancel />
        </>
    )
}