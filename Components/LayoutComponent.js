import React from 'react';
import HeadComponent from 'next/head';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Styles from '../Utils/styles';
export default function LayoutComponent({ children }) {
  const classes = Styles();
  return (
    <div>
      <HeadComponent>
        <title>Arslan Next Amazona</title>
      </HeadComponent>
      <AppBar className={classes.navbar} position="static">
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.mainContainer}>{children}</Container>
      <footer className={classes.footer}>
        All rights reserved Arslan Next Amazona
      </footer>
    </div>
  );
}
