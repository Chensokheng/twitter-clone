import { register } from '../../../service/auth_service';
import useAuthProvider from '../../../shared/hook/useAuthProvider';

const useRegisterUser = () => {
  const [_, authDispatch] = useAuthProvider();

  const registerUser = async (provider) => {
    const res = await register(provider);
    authDispatch({ type: 'UPDATE_AUTH', payload: true });
  };
  return registerUser;
};

export default useRegisterUser;
