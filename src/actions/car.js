import getCar from '../api/getCar';
import Types from './types';
import setFetching from './loading';
import setError from './error';

const setCar = car => ({
  type: Types.SET_CAR,
  car,
});

const fetchCar = id => async dispatch => {
  try {
    dispatch(setFetching(true));
    const res = await getCar(id);
    dispatch(setFetching(false));
    const { data } = res;
    if (data) dispatch(setCar(data));
    return data;
  } catch (e) {
    dispatch(setError(e));
    dispatch(setFetching(false));
    return e;
  }
};

export default fetchCar;
