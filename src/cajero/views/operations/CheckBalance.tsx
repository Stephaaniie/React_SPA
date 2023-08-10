import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const CheckBalance: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate("auth/login", { replace: true });
        }, 15000);
        return () => clearTimeout(timeout);
    }, [navigate]);


    return (
        <Box  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }} padding={10}>
            <Box sx={{ gridColumn: '2' }} alignItems={'center'}>
                <Typography variant="h3"
                >Su saldo es</Typography>
                <Typography variant="h4" paddingLeft={10} paddingTop={10}
                ><strong> $ 0.00 </strong></Typography>
            </Box>
            <Box alignItems={'center'}>
                <Typography variant="h5">
                    <strong>¿Desea realizar otra operación?</strong>
                </Typography>
            </Box>
            <Box sx={{ '& button': { m: 6 } }} >
                <ButtonGroup sx={{gap:40, borderRadius:4}}>
                    <Button variant="contained" size="large" onClick={() => navigate("auth/options", { replace: true })}>
                        Si
                    </Button>
                    <Button variant="contained" size="large" onClick={() => navigate("/cancel", { replace: true })}>
                        No
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    )
}