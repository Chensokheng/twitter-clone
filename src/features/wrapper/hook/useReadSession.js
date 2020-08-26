import useAuthProvider from '../../../shared/hook/useAuthProvider';
import { useEffect, useState } from 'react';
import { firebase } from '../../../config/firebase-config';

const useReadSession = () => {
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
  return isLoading;
};

export default useReadSession;
