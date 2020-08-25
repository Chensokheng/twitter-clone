import React, { useReducer } from 'react';
import { authReducer, authState } from './shared_state/auth_state';
import { testReducer, testState } from './shared_state/test_state';

const InjectProvider = ({ children }) => {
  const authProvider = useReducer(authReducer, authState);
  const testProvider = useReducer(testReducer, testState);
  return (
    <InjectContext.Provider value={{ authProvider, testProvider }}>
      {children}
    </InjectContext.Provider>
  );
};
export const InjectContext = React.createContext();

export default InjectProvider;
