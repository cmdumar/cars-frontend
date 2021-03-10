import getCars from '../api/getCars';
import Types from './actionTypes';

const fetchCarsBegin = () => ({
  type: Types.FETCH_CARS_BEGIN,
});

const fetchCarsSuccess = cars => ({
  type: Types.FETCH_CARS_SUCCESS,
  payload: { cars },
});

const fetchCarsError = error => ({
  type: Types.FETCH_CARS_ERROR,
  payload: { error },
});

const fetchCars = () => dispatch => {
  dispatch(fetchCarsBegin());
  return getCars()
    .then(async res => {
      await dispatch(fetchCarsSuccess(res.data));
      return res.data;
    })
    .catch(err => dispatch(fetchCarsError(err)));
};

export default fetchCars;
