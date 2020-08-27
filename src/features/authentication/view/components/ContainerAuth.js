import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import useAuthenticateUser from '../../hook/useAuthenticateUser';
import content from '../../content';

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

export default function ContainerAuth() {
  const classes = useStyles();
  const authenticateUser = useAuthenticateUser();
  return (
    <div className={classes.container}>
      {content.authMethods.map((auth, index) => {
        return (
          <div
            className={classes.box}
            onClick={() => authenticateUser(auth.method)}
            key={index}
          >
            <img src={auth.img} alt="github" width="60px" height="60px" />
            <div className={classes.textContainer}>
              <Typography className={classes.text}>{auth.text}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
}
