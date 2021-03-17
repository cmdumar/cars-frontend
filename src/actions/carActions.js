import getCar from '../api/getCar';
import Types from './types';

const fetchCarBegin = () => ({
  type: Types.FETCH_CAR_BEGIN,
});

const fetchCarSuccess = car => ({
  type: Types.FETCH_CAR_SUCCESS,
  payload: { car },
});

const fetchCarError = error => ({
  type: Types.FETCH_CAR_ERROR,
  payload: { error },
});

const fetchCar = id => dispatch => {
  dispatch(fetchCarBegin());
  return getCar(id)
    .then(async res => {
      await dispatch(fetchCarSuccess(res.data));
      return res.data;
    })
    .catch(err => dispatch(fetchCarError(err)));
};

export default fetchCar;
