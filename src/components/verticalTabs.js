import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AutoGrid from './weaponStorage';
import Button from '@mui/material/Button';
import RowAndColumnSpacing from './4gridButtons';
import StickyHeadTable from './stickyTableID';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: 'flexbox', height: 450 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Disk Tabs"
        textColor="primary"
        indicatorColor="secondary">
        <Tab
          label="Emergency Calls"
          {...a11yProps(0)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
        <Tab
          label="PLAYER LOCATOR"
          {...a11yProps(1)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
        <Tab
          label="Weapon Storage"
          {...a11yProps(2)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <Box sx={{ p: 1 }}>Text Box 1</Box>
          <Box sx={{ p: 1 }}>Text Box 2</Box>
          <Box sx={{ p: 1 }}>Text Box 3</Box>
          <Box sx={{ p: 1 }}>
            Status: <Box sx={{ color: '#00e676' }}>Available</Box>{' '}
          </Box>
          <Box sx={{ p: 1 }}>
            Report:<Box sx={{ color: '#dd2c00' }}>Dispatched</Box>{' '}
          </Box>
          <Box sx={{ display: 'flexbox' }}>
            <Button variant="outlined" size="small" sx={{ m: 1 }}>
              Sell
            </Button>
            <Button variant="outlined" size="small" sx={{ m: 1 }}>
              Buy
            </Button>
          </Box>
        </Box>
        <Box sx={{ pt: 2, pl: 2 }}>
          <img src={require('./saeslogo.png')} width="150" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          <Box sx={{ p: 0.5, height: 225, overflow: 'hidden' }}>
            <StickyHeadTable></StickyHeadTable>
          </Box>
          {/* <Box sx={{ display: 'flexbox' }}></Box> */}
          <RowAndColumnSpacing></RowAndColumnSpacing>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ p: 0.5, height: 400, overflow: 'auto' }}>
          <AutoGrid></AutoGrid>
        </Box>
      </TabPanel>
    </Box>
  );
}
