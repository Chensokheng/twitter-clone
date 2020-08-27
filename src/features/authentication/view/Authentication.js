import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Particles from 'react-particles-js';
import ContainerAuth from './components/ContainerAuth';
import content from '../content';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
  },
  desc: {
    color: '#fff',
    fontSize: '1.3rem',
  },
  canvas: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '-1',
    background: '#16202C',
  },
  snackbar: {
    background: 'blue',
    position: 'absolute',
  },
}));
export default function Authentication() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.title}>{content.title}</h1>
        <ContainerAuth />
        <Typography className={classes.desc}>{content.desc}</Typography>
      </div>
      <img src={content.mainImg} alt="" width="500px" />
      <Particles
        className={classes.canvas}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 2,
            },
            shape: {
              type: ['circle'],
            },
          },
        }}
      />
    </div>
  );
}
