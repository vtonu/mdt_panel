import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
/* import SelectTextFields from './ammoTypeSelect'; */
/* import WestOutlinedIcon from '@mui/icons-material/WestOutlined'; */
import EastOutlined from '@mui/icons-material/EastOutlined';
import AccessibleTable from './currentWeaponsTable';
import AccessibleTable2 from './storageTable';
import ReadySwitchToggle from './readySwitch';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid xs>
          <Item sx={{ mb: 1, color: '#3d5afe', backgroundColor: '#111111' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              Available for Backup
              <CellTowerOutlinedIcon></CellTowerOutlinedIcon>
            </Box>
          </Item>
          <Box>
            <AccessibleTable></AccessibleTable>
          </Box>
          <Box sx={{ mt: 1 }}>
            {/* <SelectTextFields></SelectTextFields> */}
            {/* <Button variant="outlined" size="small">
                  <WestOutlinedIcon></WestOutlinedIcon>
                </Button> */}
          </Box>
        </Grid>
        <Grid xs={4}>
          <Item sx={{ color: '#e91e63', backgroundColor: '#111111' }}>
            <Box
              sx={{
                display: 'flexbox',
                height: 'auto',
              }}>
              <Button variant="outlined" size="small" sx={{ mt: 1 }}>
                ASSIST
              </Button>
              <ReadySwitchToggle></ReadySwitchToggle>
            </Box>
            <Button variant="outlined" size="small">
              <EastOutlined></EastOutlined>
            </Button>
          </Item>
        </Grid>
        <Grid xs>
          <Item sx={{ mb: 1, color: '#3d5afe', backgroundColor: '#111111' }}>
            Role-Play Personnel
          </Item>
          <AccessibleTable2></AccessibleTable2>
        </Grid>
      </Grid>
    </Box>
  );
}
