import Types from '../actions/types';

const initialState = {
  cars: [],
  loading: false,
  error: '',
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_CARS_BEGIN:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload.cars,
      };
    case Types.FETCH_CARS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        cars: [],
      };
    default:
      return state;
  }
};

export default carsReducer;
