import { Box, Typography } from '@mui/material';
import { NumberBoard, ButtonCancel } from '../../../cajero/components';

export const InsertOtherAmount: React.FC = () => {
    return (
        <>
            <Box sx={{ m: 8 }} display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
                <Typography variant="h3" align="center">
                    Otro monto
                </Typography>
            </Box>
            <Box sx={{ m: 2 }} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <Box paddingLeft={40} >
                    <Typography variant="h3" align="center">
                        $0
                    </Typography>
                </Box>
                <Box paddingRight={15}>
                    <NumberBoard />
                </Box>
            </Box>
            <ButtonCancel />
        </>
    );
}