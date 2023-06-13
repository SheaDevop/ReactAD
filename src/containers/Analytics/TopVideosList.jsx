import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const rows = [
  { thumbnail: 'src/assets/react.svg', name: 'Some Random name', averageViewDuration: '2:25 (41%)', views: 1234 },
  { thumbnail: 'src/assets/react.svg', name: 'Some Random name1', averageViewDuration: '6:45 (35%)', views: 5123 },
  { thumbnail: 'src/assets/react.svg', name: 'Some Random name2', averageViewDuration: '2:65 (60%)', views: 8263 },
  { thumbnail: 'src/assets/react.svg', name: 'Some Random name3', averageViewDuration: '6:45 (21%)', views: 1534 },
  { thumbnail: 'src/assets/react.svg', name: 'Some Random name4', averageViewDuration: '1:45 (30%)', views: 5125 },
  { thumbnail: 'src/assets/react.svg', name: 'Some Random name5', averageViewDuration: '8:50 (75%)', views: 6512 }
]

const TopVideosList = () => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">
        Your top content in this period
      </Typography>
      <TableContainer sx={styles.tableContainer} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Content</TableCell>
              <TableCell align="right">Average view duration</TableCell>
              <TableCell align="right">Views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' sx={styles.contentCell}>
                  <Box sx={styles.videoThumbnail} component='img' src={row.thumbnail}/>
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.averageViewDuration}</TableCell>
                <TableCell align="right">{row.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    mt: 4,
    width: '100%',
    textAlign: 'center'
  },
  tableContainer: {
    mt: 8
  },
  contentCell: {
    display: 'flex',
    alignItems: 'center'
  },
  videoThumbnail: {
    width: '100%',
    maxWidth: 100,
    mr: 1
  }
}

export default TopVideosList;
