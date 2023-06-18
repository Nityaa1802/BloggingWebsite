"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import styles from '../../styles/myProfile.module.css'
import AllCards from '@/components/AllCards';

const NavTabs = () => {

    const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
      <div>
          <h1 id={styles.heading}>
              Welcome Back Nityaa!
          </h1>
          <Box sx={{ width: '95%', typography: 'body1',m:3 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My Post" value="1" />
            <Tab label="Saved Post" value="2" />
            <Tab label="Liked Post" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1"><AllCards/></TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    </div>
  )
}

export default NavTabs