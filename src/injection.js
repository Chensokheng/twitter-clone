import React, { createContext, useReducer } from 'react';
import { authReducer, authState } from './shared/state/auth_state';
import { alertState, alertReducer } from './shared/state/alert_state';

export default function InJectProvider({ children }) {
  const authProvider = useReducer(authReducer, authState);
  const alertProvider = useReducer(alertReducer, alertState);

  return (
    <InjectContext.Provider value={{ authProvider, alertProvider }}>
      {children}
    </InjectContext.Provider>
  );
}

export const InjectContext = createContext();
