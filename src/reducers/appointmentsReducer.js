import Types from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const appointmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_APPOINTMENTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.FETCH_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.car,
      };
    case Types.FETCH_APPOINTMENTS_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
        items: [],
      };
    default:
      return state;
  }
};

export default appointmentsReducer;
