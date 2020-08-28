import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Wrapper from './features/wrapper/view/Wrapper';
import CustomSnackBar from './shared/components/CustomSnackBar';
function App() {
  return (
    <div>
      <CssBaseline />
      <Wrapper />
      <CustomSnackBar />
    </div>
  );
}

export default App;
