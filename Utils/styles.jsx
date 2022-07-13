import React from 'react';
import { makeStyles } from '@mui/styles';
//create styles for react application using 'makestyles' mui hook
const Styles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      margin: 20,
    },
  },
  mainContainer: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});
export default Styles;
