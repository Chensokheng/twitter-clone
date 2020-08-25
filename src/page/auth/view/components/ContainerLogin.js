import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { register } from '../../../../service/auth_service';
import { githubAuth, googleAuth } from '../../../../config/firebase-config';
import useCreateUser from '../../hook/useRegisterAuth';

const useStyles = makeStyles((theme) => ({
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
}));

export default function ContainerLogin() {
  const classes = useStyles();
  const createUser = useCreateUser();

  return (
    <div className={classes.container}>
      <div className={classes.box} onClick={() => createUser(githubAuth)}>
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
      <div className={classes.box} onClick={() => createUser(googleAuth)}>
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
  );
}
