import { useContext } from 'react';
import { InjectContext } from '../../injection';

const useAuthProvider = () => {
  const { authProvider } = useContext(InjectContext);
  return authProvider;
};

export default useAuthProvider;
