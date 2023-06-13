import { Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import TabPanel from '../../components/TabPanel';
import OverviewChart from "./OverviewChart";
import TopVideosList from "./TopVideosList";
import RealtimeChart from "./RealtimeChart";
import LatestVideoCard from '../../components/LatestVideoCard';

const Analytics = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h6">Analytics</Typography>
      <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Overview" id="tab-0"/>
          <Tab label="Content" id="tab-1"/>
          <Tab label="Audience" id="tab-2"/>
          <Tab label="Revenue" id="tab-3"/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box sx={styles.overviewContainer}>
          <Box sx={styles.statsContainer}>
            <Typography variant="h6">
              Your channel got 23,123 views in the last 28 days
            </Typography>
            <OverviewChart />
            <Divider sx={styles.divider} />
            <TopVideosList />
          </Box>
          <Box>
            <RealtimeChart />
            <LatestVideoCard />
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Test2</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography>Test3</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography>Test4</Typography>
      </TabPanel>
    </Box>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2
  }  
}

export default Analytics;
