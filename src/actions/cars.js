import getCars from '../api/getCars';
import Types from './types';
import setFetching from './loading';
import setError from './error';

const setCars = cars => ({
  type: Types.SET_CARS,
  cars,
});

const fetchCars = () => async dispatch => {
  try {
    dispatch(setFetching(true));
    const res = await getCars();
    dispatch(setFetching(false));
    const { data } = res;
    if (data) dispatch(setCars(data));
    return data;
  } catch (e) {
    dispatch(setError(e));
    dispatch(setFetching(false));
    return e;
  }
};

export default fetchCars;
