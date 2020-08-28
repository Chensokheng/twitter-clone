const alertState = {
  isAlert: true,
  message: 'default',
};

const alertReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CLOSE_ALERT':
      return {
        ...state,
        isAlert: false,
      };
    default:
      throw new Error();
  }
};

export { alertState, alertReducer };
