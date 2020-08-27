import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useAuthenticateUser from '../../features/authentication/hook/useAuthenticateUser';
import useAuthProvider from '../hook/useAuthProvider';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackBar() {
  const [authState, authDispatch] = useAuthProvider();

  const handleClose = () => {
    authDispatch({ type: 'UPATE_ALERT', payload: false });
  };

  return (
    <Snackbar
      open={authState.alert}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      {authState.isAuth ? (
        <Alert onClose={handleClose} severity="success">
          {authState.alertMessage}
        </Alert>
      ) : (
        <Alert severity="error"> {authState.alertMessage}</Alert>
      )}
    </Snackbar>
  );
}
