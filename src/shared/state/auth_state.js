const authState = {
  isAuth: false,
  alertMessage: null,
  alert: false,
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_AUTH':
      return {
        ...state,
        isAuth: payload,
      };
    case 'UPDATE_ALERT_MESSAGE':
      return {
        ...state,
        alertMessage: payload.message,
        alert: payload.isAlert,
      };
    case 'UPATE_ALERT':
      return {
        ...state,
        alert: payload,
      };
    default:
      throw new Error();
  }
};

export { authState, authReducer };
