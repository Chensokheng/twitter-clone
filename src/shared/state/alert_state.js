const alertState = {
  isAlert: false,
  isError: false,
  message: 'default',
};

const alertReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CLOSE_ALERT':
      return {
        ...state,
        isAlert: false,
      };
    case 'ALERT_USER':
      return {
        isAlert: true,
        message: payload.message,
        isError: payload.isError,
      };
    default:
      throw new Error();
  }
};

export { alertState, alertReducer };
