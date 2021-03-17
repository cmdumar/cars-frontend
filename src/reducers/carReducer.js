import Types from '../actions/types';

const initialState = {
  car: [],
  loading: false,
  error: null,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CAR_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.FETCH_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        car: action.payload.car,
      };
    case Types.FETCH_CAR_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        car: [],
      };
    default:
      return state;
  }
};

export default carReducer;
