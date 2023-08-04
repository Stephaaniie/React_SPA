import { Box, Button, ButtonGroup, Typography } from '@mui/material';

export const CheckBalance: React.FC = () => {
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
                    <Button variant="contained" size="large">
                        Si
                    </Button>
                    <Button variant="contained" size="large">
                        No
                    </Button>
                </ButtonGroup>
            </Box>
        </Box>
    )
}