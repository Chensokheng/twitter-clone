import { useContext } from 'react';
import { InjectContext } from '../injection';

const useAuthState = () => {
  const { authProvider } = useContext(InjectContext);
  return authProvider;
};

export default useAuthState;
