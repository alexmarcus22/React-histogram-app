import { ThemeProvider, Container } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Page.css'
import { useLazyQuery } from '@apollo/client';
import GET_POSTS from '../../services/api/query';
import Histogram from './Histogram';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#11cb5f',
    },
  },
});

const Page = () => {
  const [getPosts, { loading, data }] = useLazyQuery(GET_POSTS, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    <div className="page">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" className="page-container">
          <Typography variant="h1">Histogram Posts</Typography>
          {!loading ? <Button variant="contained" color="secondary" onClick={getPosts} sx={{
            marginBottom: '5rem'
          }}>Show Histogram</Button> : <div>loading...</div>}
          {!data ? null : <Histogram data={data} />}
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Page;