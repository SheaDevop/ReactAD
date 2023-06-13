import { Circle } from "@mui/icons-material";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import ColorText from '../../components/ColorText';
import { Bar } from "react-chartjs-2";
import { realtimeChartData, realtimeChartOptions } from "./config/ChartConfigs";

const RealtimeChart = () => {
  return (
    <Card sx={styles.realtimeStatsCard}>
      <CardContent>
        <Box>
          <Typography variant="cardTitle">Realtime</Typography>
          <Box sx={styles.updateLiveRow}>
            <Circle sx={styles.dotIcon} />
            <Typography variant="h7"><ColorText color='neutral.normal'>Updating Live</ColorText></Typography>
          </Box>
          <Divider sx={styles.divider}/>
          <Typography sx={styles.valueText}>4,144</Typography>
          <Typography variant="h7"><ColorText color='neutral.normal'>Subscribers</ColorText></Typography>
          <Divider sx={styles.divider}/>
          <Typography sx={styles.valueText}>1,645</Typography>
          <Typography variant="h7"><ColorText color='neutral.normal'>Views Last 48hs</ColorText></Typography>
          <Divider sx={styles.divider}/>
          <Box sx={styles.RealtimeChart}>
            <Bar options={realtimeChartOptions} data={realtimeChartData} />
          </Box>
          <Typography variant="link">SEE MORE</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  realtimeStatsCard: {
    mb: 2
  },
  updateLiveRow: {
    display: 'flex',
    alignItems: 'center'
  },
  dotIcon: {
    width: '10px',
    color: 'primary.normal',
    mr: 1
  },
  divider: {
    my: 2
  },
  valueText: {
    fontSize: '1.3rem',
    fontWeight: '400'
  },
  RealtimeChart: {
    height: 70,
    mt: 4
  }
}

export default RealtimeChart;