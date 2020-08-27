import { firebase } from '../config/firebase-config';

class AuthService {
  _getResult(res, msg) {
    const result = {};
    result['res'] = res;
    result['msg'] = msg;
    return result;
  }

  authenticateUser = (provider) => {
    return firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        return this._getResult(res, 'User is granted.');
      })
      .catch((error) => {
        return this._getResult(null, error.message);
      });
  };

  signOut = async () => {
    await firebase.auth().signOut();
  };
}

export default AuthService;
