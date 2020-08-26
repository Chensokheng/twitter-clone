import useAuthProvider from '../../../shared/hook/useAuthProvider';
import AuthService from '../../../service/auth_service';

const useRegisterUser = () => {
  const [_, authDispatch] = useAuthProvider();
  const authService = new AuthService();

  const registerUser = async (provider) => {
    const res = await authService.register(provider);
    authDispatch({ type: 'UPDATE_AUTH', payload: true });
  };
  return registerUser;
};

export default useRegisterUser;
