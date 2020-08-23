import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Particles from 'react-particles-js';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginRight: theme.spacing(2),
  },
  box: {
    borderRadius: '10px',
    width: '300px',
    background: '#3E3C3F',
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: '#7d73f9',
    },
    cursor: 'pointer',
  },
  textContainer: {
    textAlign: 'center',
    flexGrow: '1',
  },
  text: {
    color: '#fff',
    fontSize: '1.4rem',
    letterSpacing: '2px',
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
}));
export default function Register() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.title}>Register</h1>
        <div className={classes.container}>
          <div className={classes.box}>
            <img
              src={process.env.PUBLIC_URL + '/assets/github.png'}
              alt="github"
              width="60px"
              height="60px"
            />
            <div className={classes.textContainer}>
              <Typography className={classes.text}>Github</Typography>
            </div>
          </div>
          <div className={classes.box}>
            <img
              src={process.env.PUBLIC_URL + '/assets/google.png'}
              alt="github"
              width="60px"
              height="60px"
            />
            <div className={classes.textContainer}>
              <Typography className={classes.text}>Google</Typography>
            </div>
          </div>
        </div>
        <Typography className={classes.desc}>
          The most secure and easy authentication
        </Typography>
      </div>
      <img
        src={process.env.PUBLIC_URL + '/assets/remote-team.svg'}
        alt=""
        width="500px"
      />
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
