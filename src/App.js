import FixedContainer from './components/mainBox';
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: 850,
            height: 650,
            p: 1.2,
            m: 0,
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.50'),
            color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
            border: '1px solid',
            borderColor: (theme) => (theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300'),
            borderRadius: 2,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontWeight: '700',
          }}>
          <Box sx={{ p: 1, color: 'white' }}>SAES V MDT Panel v0.3</Box>
          <FixedContainer></FixedContainer>
          <Box sx={{ p: 1 }} display="flex" justifyContent="space-between">
            <Button variant="outlined" size="small">
              refresh
            </Button>
            <Button variant="outlined" size="small">
              close
            </Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
