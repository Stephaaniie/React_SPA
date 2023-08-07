import { Button, Box, ButtonGroup } from '@mui/material';

import { useAppDispatch } from '../../hooks/redoxHooks';
import { orange } from '@mui/material/colors';

export const NumberBoard: React.FC = () => {
/*  
    const { 
      auth: { isLoading } ,
    } = useAppSelector((state) => state);
  */
    const dispatch = useAppDispatch();
    
    const colum1 = [
    <Button key="one">1</Button>,
    <Button key="four">4</Button>,
    <Button key="seven">7</Button>,
    <Button key="delete">Borrar</Button>
    ];
    const colum2 = [
    <Button key="two">2</Button>,
    <Button key="five">5</Button>,
    <Button key="eight">8</Button>,
    <Button key="cero">0</Button>
    ];
    const colum3 = [
    <Button key="three">3</Button>,
    <Button key="six">6</Button>,
    <Button key="nine">9</Button>,
    <Button 
        key="continue" 
        variant="contained"
        disabled
        
    >
        Continuar</Button>
    ];

    return (
        <Box sx={{ 
            display: 'flex','& > *': {  m: 0.5,},
            p: 3,
            border: 2,
            borderColor: orange[800],
            height:240,
            gridColumn: '4', 
            gridRow: '2 / 3',
            justifyContent: 'center', 
            alignItems: 'center'
        }}
        >
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                sx={{boxShadow:0}}
            >
                {colum1}
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                sx={{boxShadow: 0 }}
            >
                {colum2}
            </ButtonGroup>
            <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="contained"
                sx={{boxShadow: 0}}
            >
                {colum3}
            </ButtonGroup>
        </Box>
    );
}