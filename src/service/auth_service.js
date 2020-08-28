import { firebase } from '../config/firebase-config';

class AuthService {
  authenticateUser = (provider) => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        return result;
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  };

  signOut = async () => {
    await firebase.auth().signOut();
  };
}

export default AuthService;
