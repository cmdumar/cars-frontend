import { FETCH_CARS_BEGIN, FETCH_CARS_SUCCESS, FETCH_CARS_ERROR } from '../actions/carsActions';

const initialState = {
  cars: [],
  loading: false,
  error: '',
};

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_BEGIN:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload.cars,
      };
    case FETCH_CARS_ERROR:
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
