import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC2bjGR_9dTm4wGjDf9z2pAMum962OCAZE',
  authDomain: 'twitter-clone-efa09.firebaseapp.com',
  databaseURL: 'https://twitter-clone-efa09.firebaseio.com',
  projectId: 'twitter-clone-efa09',
  storageBucket: 'twitter-clone-efa09.appspot.com',
  messagingSenderId: '719684394838',
  appId: '1:719684394838:web:4ffe4e4794897f639e80f7',
  measurementId: 'G-KMT6D0FBPD',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
