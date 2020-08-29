import { firebase } from '../config/firebase-config';

class UserService {
  constructor(uid) {
    this.userRef = firebase.firestore().collection('users').doc(uid);
  }

  setUpProfile(userInfo) {
    return this.userRef.get().then((doc) => {
      if (!doc.exists) {
        return this.userRef.set(userInfo);
      }
    });
  }
}

export default UserService;
