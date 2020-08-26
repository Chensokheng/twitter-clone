import ClipLoader from 'react-spinners/ClipLoader';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Loading({ loading }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ClipLoader size={150} color={'#123abc'} loading={loading} />
    </div>
  );
}
