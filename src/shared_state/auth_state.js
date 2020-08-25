const authState = {
  isAuth: false,
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_AUTH':
      return {
        isAuth: true,
      };
    default:
      throw new Error();
  }
};

export { authState, authReducer };
