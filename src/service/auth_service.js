import { firebase } from '../config/firebase-config';

const register = (provider) => {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return result;
    });
};

const signOut = async () => {
  await firebase.auth().signOut();
};

export { register, signOut };
