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
  const [status, setStatus] = React.useState('Available');
  const [color, setColor] = React.useState('#00e676');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    if (status === 'Available') {
      setStatus('Unavailable');
      setColor('red');
    } else {
      setStatus('Available');
      setColor('#00e676');
    }
  };

  return (
    <Box sx={{ display: 'flexbox', height: 550 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="SAES V MDT System"
        textColor="primary"
        indicatorColor="secondary">
        <Tab
          label="Emergency Calls"
          {...a11yProps(0)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
        <Tab
          label="DISPATCH"
          {...a11yProps(1)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
        <Tab
          label="SQUAD SUPPORT"
          {...a11yProps(2)}
          sx={{ borderRight: 1, borderBottom: 1, borderColor: 'divider' }}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box>
          <Box sx={{ p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button variant="outlined" size="small" sx={{ m: 1 }} onClick={handleClick}>
              activate
            </Button>
            Status: <Box sx={{ color: color, pl: 1 }}>{status}</Box>{' '}
          </Box>
        </Box>
        <Box sx={{ pt: 40 }}>
          <img src={require('./saeslogo.png')} width="150" alt="saeslogo" />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box>
          <Box sx={{ p: 0.5, height: 225, overflow: 'hidden' }}>
            {' '}
            {/* Hidden scroll bar for dispatch tab */}
            <StickyHeadTable></StickyHeadTable>
          </Box>
          {/* <Box sx={{ display: 'flexbox' }}></Box> */}
          <RowAndColumnSpacing></RowAndColumnSpacing>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{ p: 0.5, height: 475, overflow: 'hidden' }}>
          <AutoGrid></AutoGrid>
        </Box>
      </TabPanel>
    </Box>
  );
}
