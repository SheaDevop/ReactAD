import { Box, Tab, Tabs } from "@mui/material";
import { forwardRef, useState } from "react";
import AnalyticsTabHead from "./AnalyticsTabHead";
import { ArrowDropDownCircleSharp, CheckCircle } from "@mui/icons-material";
import TabPanel from "../../components/TabPanel";
import { Line } from "react-chartjs-2";
import { getMainChartData, mainChartOptions } from "./config/ChartConfigs";

const ViewsTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props} title='Views' icon={<ArrowDropDownCircleSharp color="red"/>} value='21.4k' subtitle={'700 less than usual'} />);

const WatchTimeTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props} title='Watch Time' icon={<ArrowDropDownCircleSharp color="green" sx={{transform: 'rotate(180deg)'}}/>} value='500' subtitle={'35 more than usual'} />);

const SubscribersTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props} title='Subscribers' icon={<CheckCircle color="green"/>} value='+140' subtitle={'about the same as usual'} />);

const RevenueTabHead = forwardRef((props, ref) => <AnalyticsTabHead {...props} title='Revenue' icon={<ArrowDropDownCircleSharp color="green" sx={{transform: 'rotate(180deg)'}}/>} value='$240' subtitle={'50 less than usual'} />);


const OverviewChart = () => {

  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  return (
    <Box sx={styles.container}>
      <Tabs value={value} onChange={handleChange}>
        <Tab component={ViewsTabHead} id="tab-0"/>
        <Tab component={WatchTimeTabHead} id="tab-1"/>
        <Tab component={SubscribersTabHead} id="tab-2"/>
        <Tab component={RevenueTabHead} id="tab-3"/>
      </Tabs>
      <TabPanel value={value} index={0} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3} mt={0}>
        <Box sx={styles.mainChart}>
          <Line options={mainChartOptions} data={getMainChartData()} />
        </Box>
      </TabPanel>
    </Box>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    mt: 4,
    width: '100%'
  },
  mainChart: {
    height: 250,
    border: 1,
    borderColor: 'neutral.medium',
    pt: 4,
    borderTop: 'none',
    borderRadius: 1
  }
}

export default OverviewChart;