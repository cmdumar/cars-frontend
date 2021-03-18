import getAppointments from '../api/getAppointments';
import Types from './types';
import setFetching from './loading';
import setError from './error';

const setAppointments = appointments => ({
  type: Types.SET_APPOINTMENTS,
  appointments,
});

const fetchAppointments = () => async dispatch => {
  try {
    dispatch(setFetching(true));
    const res = await getAppointments();
    dispatch(setFetching(false));
    const { data } = res;
    if (data) dispatch(setAppointments(data));
    return data;
  } catch (e) {
    dispatch(setError(e));
    dispatch(setFetching(false));
    return e;
  }
};

export default fetchAppointments;
