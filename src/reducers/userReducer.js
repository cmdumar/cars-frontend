import Types from '../actions/actionTypes';

const initialState = {
  user: {},
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        error: null,
      };
    case Types.LOGIN_ERROR:
      return {
        ...state,
        user: {},
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
