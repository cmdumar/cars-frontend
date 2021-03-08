import getCars from '../api/getCars';

export const FETCH_CARS_BEGIN = 'FETCH_CARS_BEGIN';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';

const fetchCarsBegin = () => ({
  type: FETCH_CARS_BEGIN,
});

const fetchCarsSuccess = cars => ({
  type: FETCH_CARS_SUCCESS,
  payload: { cars },
});

const fetchCarsError = error => ({
  type: FETCH_CARS_ERROR,
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
