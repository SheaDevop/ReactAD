import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";
import ColorText from "../../components/ColorText";

const Dashboard = () => {
  return (
    <Box>
      <Typography sx={styles.pageTitle} variant="h5">Channel Dashboard</Typography>
      <Box sx={styles.columnContainer}>
        <LatestVideoCard sx={styles.item}/>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">LatestPost</Typography>
            <Box sx={styles.postAuthorSection}>
              <Avatar sx={styles.avatar} src="src/assets/react.svg" />
              <Typography sx={styles.postMeta}>Post Date</Typography>
            </Box>
            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor nisi feugiat massa, id imperdiet felis lorem a orci.</Typography>
            <Divider sx={styles.divider} />
            <Box sx={styles.postStats}>
              <Typography variant="body2">Likes</Typography>
              <Typography variant="body2">Comments</Typography>
              <Typography variant="h6">12</Typography>
              <Typography variant="h6">8</Typography>
            </Box>

            <Typography sx={styles.cardAction} variant="link">GO TO COMMUNITY TAB</Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Channel Analytics</Typography>
            <Typography variant="h7">Current Subscribers</Typography>
            <Typography variant="h6">4,420</Typography>
            <Typography variant="h7"><ColorText color={'green.main'}>+77</ColorText> <ColorText color={'neutral.normal'}>in last 28 days</ColorText></Typography>
            <Divider sx={styles.divider} />
            <Typography variant="h6">Summary</Typography>
            <Typography variant="h8"><ColorText color={'neutral.normal'}>Last 28 days</ColorText></Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Views</Typography>
              <Typography variant="h7">225</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Watch Time (hours)</Typography>
              <Typography variant="h7">30</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Estimated Revenue</Typography>
              <Typography variant="h7">$450</Typography>
            </Box>
            <Divider sx={styles.divider}/>
            <Typography variant="h6">Top videos</Typography>
            <Typography variant="h6"><ColorText color={'neutral.normal'}>Last 48hs</ColorText></Typography>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Video title</Typography>
              <Typography variant="h7">435</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">Another video title</Typography>
              <Typography variant="h7">650</Typography>
            </Box>
            <Box sx={styles.videoStatsRow}>
              <Typography variant="h7">And another one</Typography>
              <Typography variant="h7">420</Typography>
            </Box>
            <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent>
            <Typography variant="cardTitle">Latest comments</Typography>
            <Typography variant="h7"><ColorText color={'neutral.normal'}>Channel comments I haven't responded to</ColorText></Typography>

            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src="src/assets/react.svg" />
              <Box>
                <Box sx={styles.commentDetials}>
                  <Typography sx={styles.postMeta}>Channel Name</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
              <Box sx={styles.videoThumbnail} component={'img'} src="src/assets/react.svg" />
            </Box>
            <Divider sx={styles.divider} />
            <Box sx={styles.commentRow}>
              <Avatar sx={styles.avatar} src="src/assets/react.svg" />
              <Box>
                <Box sx={styles.commentDetials}>
                  <Typography sx={styles.postMeta}>Channel Name</Typography>
                  <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                </Box>
                <Typography sx={styles.commentText}>
                  Lorem ipsum, consectetur adipiscing elit.
                </Typography>
              </Box>
              <Box sx={styles.videoThumbnail} component={'img'} src="src/assets/react.svg" />
            </Box>

            <Typography sx={styles.cardAction} variant="link">VIEW MORE</Typography>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Ideas for you</Typography>
              <Typography sx={styles.ideasQuestion}>Read to get business savvy?</Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to start a business channel
              </Typography>
              <Typography sx={styles.cardAction} variant="link">GET STARTED NOW</Typography>
            </Box>
            <Box component={'img'} sx={styles.ideaImage} src="src/assets/react.svg"/>
          </CardContent>
        </Card>

        <Card sx={styles.item}>
          <CardContent sx={styles.ideaContent}>
            <Box>
              <Typography variant="cardTitle">Creator Insider</Typography>
              <Box component={'img'} sx={styles.insiderImage} src="src/assets/react.svg"/> 
              <Typography sx={styles.ideasQuestion}>Ready to boost your skills using AI tools</Typography>
              <Typography variant="h7">
                Get tips from a successful creator on how to start a business channel
              </Typography>
              <Typography sx={styles.cardAction} variant="link">WATCH ON YOUTUBE</Typography>
            </Box>
          </CardContent>
        </Card>
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
  },
  item: {
    mb: 2
  },
  postAuthorSection: {
    display: 'flex',
    alignItems: 'center',
    my: 3
  },
  avatar: {
    width: '30px',
    height: 'auto',
    mr: 1
  },
  postMeta: {
    mr: 1,
    fontSize: '0.8rem',
    color: 'neutral.normal'
  },
  divider: {
    my: 2
  },
  postStats: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    my: 3
  },
  cardAction: {
    mt: 2
  },
  videoStatsRow: {
    display: 'flex',
    justifyContent: 'space-between',
    mt: 2,
    '&:hover': {
      color: 'primary.main',
      cursor: 'pointer'
    }
  },
  videoThumbnail: {
    width: 80,
    ml: 'auto'
  },
  commentRow: {
    display: 'flex',
    alignItems: 'flex-start',
    mt: 2
  },
  commentDetials: {
    display: 'flex',
    alignItems: 'center'
  },
  commentText: {
    fontSize: '0.8rem',
    mt: 0.5,
    mr: 2
  },
  ideaContent: {
    display: 'flex'
  },
  ideasQuestion: {
    fontSize: '0.9rem',
    fontWeight: 500,
    my: 2
  },
  ideaImage: {
    width: 80,
    alignSelf: 'center',
    ml: 5
  },
  insiderImage: {
    width: '100%',
    mt: 1
  }
}

export default Dashboard;
