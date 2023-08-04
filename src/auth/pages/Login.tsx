import React from 'react';
import { Box, Typography } from '@mui/material';

//import { NumberBoard } from '../../cajero/components';
import { InsertData } from "../components/InsertData";
import { PanelNumer } from '../components/PanelNumeric';

export const Login: React.FC = () => {
  return (
    <>
      <div>
        <Box sx={{ gridColumn: '2' }}>
          <Typography variant="h5" paddingLeft={12} paddingTop={5} paddingBottom={2}
          >Cajero Automático TASI</Typography>
          <Typography variant="h6" paddingLeft={12} paddingBottom={2}
          >Ingrese DNI y Clave</Typography>
        </Box>
      </div>
      <div>
        <Box
          sx={{
            display: 'grid',
            gridAutoFlow: 'row',
            paddingRight: 9
          }}
        >
          <InsertData />
          <PanelNumer/>
        </Box>
      </div>
    </>
  )
}
