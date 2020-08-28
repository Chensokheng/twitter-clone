import useAuthProvider from '../../../shared/hook/useAuthProvider';
import AuthService from '../../../service/auth_service';
import useAlertProvider from '../../../shared/hook/useAlertProvider';

const useAuthenticateUser = () => {
  const [_, authDispatch] = useAuthProvider();
  const { alertDispatch } = useAlertProvider();
  const authService = new AuthService();

  const authenticateUser = async (provider) => {
    authService
      .authenticateUser(provider)
      .then((res) => {
        // alert user succesfull
        alertDispatch({
          type: 'ALERT_USER',
          payload: { message: 'Successfull', isError: false },
        });
        authDispatch({ type: 'UPDATE_AUTH', payload: true });
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
  return authenticateUser;
};

export default useAuthenticateUser;
