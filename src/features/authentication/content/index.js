import { googleAuth, githubAuth } from '../../../config/firebase-config';

const content = {
  title: 'Register',
  desc: 'The most secure and easy authentication',
  mainImg: process.env.PUBLIC_URL + '/assets/remote-team.svg',

  authMethods: [
    {
      text: 'Github',
      img: process.env.PUBLIC_URL + '/assets/github.png',
      method: githubAuth,
    },
    {
      text: 'Google',
      img: process.env.PUBLIC_URL + '/assets/google.png',
      method: googleAuth,
    },
  ],
};

export default content;
