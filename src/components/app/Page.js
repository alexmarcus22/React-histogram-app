import * as React from 'react';
import { ThemeProvider, Container } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Page.css'
import { useLazyQuery, gql } from '@apollo/client';
import GET_POSTS from '../../services/api/query';
import { useState } from 'react'

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
  const [getPosts, { loading, data, error }] = useLazyQuery(GET_POSTS, {
    fetchPolicy: 'cache-and-network'
  });


  return (
    <div className="page">
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl" className="page-container">
          <Typography variant="h1">Histogram Posts</Typography>
          <Button variant="contained" color="secondary" onClick={getPosts}>Fetch Posts</Button>
          {!loading ? null : <div>loading..</div>}
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default Page;