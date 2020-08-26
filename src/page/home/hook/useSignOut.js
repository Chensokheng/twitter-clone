import { signOut } from '../../../service/auth_service';
import useAuthProvider from '../../../shared/hook/useAuthProvider';

const useSignOut = () => {
  const [_, authDispatch] = useAuthProvider();
  const signOutUser = async (provider) => {
    await signOut();
    authDispatch({ type: 'UPDATE_AUTH', payload: false });
  };
  return signOutUser;
};

export default useSignOut;
