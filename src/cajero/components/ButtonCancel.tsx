import { Box, ButtonGroup, Button } from "@mui/material";

export const ButtonCancel: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', '& > *': { m: 4 } }} display={'flex'} alignItems={'center'} justifyContent={'space-between'} paddingLeft={20}>
            <ButtonGroup variant="contained">
                <Button key="cancel">Cancelar</Button>
            </ButtonGroup>
        </Box>
    );
}