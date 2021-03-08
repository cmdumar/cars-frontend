import { FETCH_CAR_BEGIN, FETCH_CAR_SUCCESS, FETCH_CAR_ERROR } from '../actions/carActions';

const initialState = {
  car: {},
  loading: false,
  error: null,
};

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAR_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        car: action.payload.car,
      };
    case FETCH_CAR_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        car: {},
      };
    default:
      return state;
  }
};

export default carReducer;
