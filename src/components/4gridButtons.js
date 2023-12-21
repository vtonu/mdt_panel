import * as React from 'react';
import styled from '@mui/system/styled';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
}));

export default function RowAndColumnSpacing() {
  return (
    <Box
      sx={{
        pt: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 2,
      }}>
      <Button variant="outlined" size="large" sx={{ height: '40px', width: '275px' }}>
        RADIO COMMANDS
      </Button>
      <Button variant="outlined" size="small">
        <FormControlLabel
          control={<Checkbox />}
          label="Show fugitive location"
          sx={{
            height: '35px',
            width: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </Button>

      <Button variant="outlined" size="large" sx={{ height: '40px', width: '275px' }}>
        CLAIM PLAYER
      </Button>

      <Alert severity="info"> Player successfully claimed! </Alert>
    </Box>
  );
}
