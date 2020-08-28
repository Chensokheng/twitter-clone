import { useContext } from 'react';
import { InjectContext } from '../../injection';

const useAlertProvider = () => {
  const { alertProvider } = useContext(InjectContext);
  return {
    alertState: alertProvider[0],
    alertDispatch: alertProvider[1],
  };
};

export default useAlertProvider;
