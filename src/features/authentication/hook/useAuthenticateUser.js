import useAuthProvider from '../../../shared/hook/useAuthProvider';
import AuthService from '../../../service/auth_service';

const useAuthenticateUser = () => {
  const [_, authDispatch] = useAuthProvider();
  const authService = new AuthService();

  const authenticateUser = async (provider) => {
    const { res, msg } = await authService.authenticateUser(provider);
    if (res) {
      authDispatch({ type: 'UPDATE_AUTH', payload: true });
      authDispatch({
        type: 'UPDATE_ALERT_MESSAGE',
        payload: { isAlert: true, message: msg },
      });
    } else {
      authDispatch({
        type: 'UPDATE_ALERT_MESSAGE',
        payload: { isAlert: true, message: msg },
      });
    }
  };
  return authenticateUser;
};

export default useAuthenticateUser;
