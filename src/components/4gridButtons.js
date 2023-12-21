import * as React from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';

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
              Park Vehicle
            </Button>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item sx={{ backgroundColor: '#111111', border: 0 }}>
            <Button variant="outlined" size="large" sx={{ width: '215px' }}>
              Repair Vehicle
            </Button>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item sx={{ backgroundColor: '#111111', border: 0 }}>
            <Button variant="outlined" size="large" sx={{ width: '215px' }}>
              Spawn Vehicle
            </Button>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item sx={{ backgroundColor: '#111111', border: 0 }}>
            <Button variant="outlined" size="large">
              Repair All Vehicles
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
