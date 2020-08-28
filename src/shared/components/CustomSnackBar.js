import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useAlertProvider from '../hook/useAlertProvider';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackBar() {
  const { alertState, alertDispatch } = useAlertProvider();
  const open = alertState.isAlert;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    alertDispatch({ type: 'CLOSE_ALERT' });
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        This is a success message!
      </Alert>
      {/* <Alert severity="error">This is an error message!</Alert> */}
    </Snackbar>
  );
}
