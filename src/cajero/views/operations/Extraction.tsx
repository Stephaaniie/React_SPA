import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  ButtonGroup
} from '@mui/material';
import { orange } from '@mui/material/colors';
import React from 'react';

export const Extraction: React.FC = () => {

    return (
        <>
            <Box sx={{ m: 6 }} display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
                <Typography variant="h3" align="center">
                    Extracción
                </Typography>
            </Box>
            <Box sx={{ m: 3 }} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                <Box sx={{border: 2, color: orange[800]}} width={300}>
                    <form >
                        <FormControl sx={{ m: 3 }} variant="standard">
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                            >
                                <FormControlLabel value="monto1" control={<Radio />} label="$ 500" />
                                <FormControlLabel value="monto2" control={<Radio />} label="$ 2.000" />
                                <FormControlLabel value="monto3" control={<Radio />} label="$ 3.000" />
                            </RadioGroup>
                        </FormControl>
                    </form>
                </Box>
                <Box sx={{border: 2, color: orange[800]}} width={300}>
                    <form>
                        <FormControl sx={{ m: 3 }} variant="standard">
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                            >
                                <FormControlLabel value="monto4" control={<Radio />} label="$ 5.000" />
                                <FormControlLabel value="monto5" control={<Radio />} label="$ 6.000" />
                                <FormControlLabel value="monto6" control={<Radio />} label="Otro monto" />
                            </RadioGroup>
                        </FormControl>
                    </form>
                </Box>   
            </Box>
            <Box sx={{ display: 'flex', '& > *': { m: 6 } }} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'}>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    <Button key="cancel">Cancelar</Button>
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="vertical contained button group"
                    variant="contained"
                >
                    <Button key="continue">Continuar</Button>
                </ButtonGroup>
            </Box>
        </>
    );
}