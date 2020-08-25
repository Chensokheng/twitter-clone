import React from 'react';
import Routes from './routes/Routes';
import { CssBaseline } from '@material-ui/core';
import useAuthState from './shared_hook/useAuthState';

function App() {
  const auth = useAuthState();
  console.log(auth);
  return (
    <div>
      <CssBaseline />
      <Routes />
    </div>
  );
}

export default App;
