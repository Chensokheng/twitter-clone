import React, { useEffect, useState } from 'react';
import Routes from './routes/Routes';
import { CssBaseline } from '@material-ui/core';
import { firebase } from './config/firebase-config';
import useAuthProvider from './shared/hook/useAuthProvider';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [isLoading, setIsloading] = useState(true);

  const [_, authDispatch] = useAuthProvider();
  const upDateAuth = (isAuth) => {
    authDispatch({ type: 'UPDATE_AUTH', payload: isAuth });
    setIsloading(false);
  };
  useEffect(() => {
    const readSession = () => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          upDateAuth(true);
        } else {
          upDateAuth(false);
        }
      });
    };
    readSession();
  }, []);

  return (
    <div>
      <CssBaseline />
      {isLoading ? <Loading loading={isLoading} /> : <Routes />}
    </div>
  );
}

const Loading = ({ loading }) => {
  return <ClipLoader size={150} color={'#123abc'} loading={loading} />;
};

export default App;
