import useAuthProvider from '../../../shared/hook/useAuthProvider';
import AuthService from '../../../service/auth_service';
import useAlertProvider from '../../../shared/hook/useAlertProvider';
import UserService from '../../../service/user_service';

const useAuthenticateUser = () => {
  const [_, authDispatch] = useAuthProvider();
  const { alertDispatch } = useAlertProvider();
  const authService = new AuthService();

  const authenticateUser = async (provider) => {
    authService
      .authenticateUser(provider)
      .then((res) => {
        setUpUserProfile(res);
        // alert user succesfull
      })
      .catch((e) => {
        console.log();
        alertDispatch({
          type: 'ALERT_USER',
          payload: { message: 'Unable to proceed.', isError: true },
        });
        // update alert
      });
  };

  const setUpUserProfile = async (res) => {
    const userService = new UserService(res.user.uid);
    const userInfo = {
      avartaUrl: res.user.photoURL,
      username: res.user.displayName,
      date: new Date(),
    };
    await userService.setUpProfile(userInfo);
    alertDispatch({
      type: 'ALERT_USER',
      payload: { message: 'Successfull', isError: false },
    });
    authDispatch({ type: 'UPDATE_AUTH', payload: true });

    // call the user service to set the userInfo
  };

  return authenticateUser;
};

export default useAuthenticateUser;
