import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">Channel Dashboard</Typography>
      <Box sx={styles.columnContainer}>

      </Box>
    </Box>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  pageTitle: {
    mb: 2
  },
  columnContainer: {
    columns: '280px 3',
    maxWidth: 1400
  }
}

export default Dashboard;
