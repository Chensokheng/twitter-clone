import useAuthProvider from '../../../shared/hook/useAuthProvider';
import AuthService from '../../../service/auth_service';

const useAuthenticateUser = () => {
  const [_, authDispatch] = useAuthProvider();
  const authService = new AuthService();

  const authenticateUser = async (provider) => {
    const res = await authService.authenticateUser(provider);

    authDispatch({ type: 'UPDATE_AUTH', payload: true });
  };
  return authenticateUser;
};

export default useAuthenticateUser;
