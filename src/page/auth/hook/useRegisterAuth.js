import { register } from '../../../service/auth_service';
import useAuthState from '../../../shared_hook/useAuthState';
const useCreateUser = () => {
  const [_, authDispatch] = useAuthState();
  const createUser = async (provider) => {
    const res = await register(provider);
    if (res) {
      // database service right here to update user to db.
      authDispatch({ type: 'UPDATE_AUTH', payload: true });
    }
  };
  return createUser;
};

export default useCreateUser;
