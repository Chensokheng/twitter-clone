import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import useSignOut from '../hook/useSignOut';

const useStyles = makeStyles((theme) => ({}));
export default function Home() {
  const signOutUser = useSignOut();
  const classes = useStyles();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={signOutUser}>Logout</button>
    </div>
  );
}
