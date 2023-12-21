import * as React from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
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
    <Box sx={{ width: '100%', mt: 1.5 }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item sx={{ backgroundColor: '#111111', border: 0 }}>
            <Button variant="outlined" size="large" sx={{ width: '215px' }}>
              CLAIM PLAYER
            </Button>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item sx={{ backgroundColor: '#111111', border: 0 }}></Item>
        </Grid>
        <Grid xs={6}>
          <Item sx={{ backgroundColor: '#111111', border: 0 }}>
            <Button variant="outlined" size="large" sx={{ width: '215px' }}>
              RADIO COMMANDS
            </Button>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item sx={{ backgroundColor: '#111111', border: 0 }}>
            <Alert severity="info"> Player successfully claimed! </Alert>
          </Item>
        </Grid>
      </Grid>
      <Button variant="outlined" size="small">
        <FormControlLabel control={<Checkbox />} label="Show fugitive location" />
      </Button>
    </Box>
  );
}
