import getAppointments from '../api/getAppointments';
import Types from './actionTypes';

const fetchAppointmentsBegin = () => ({
  type: Types.FETCH_APPOINTMENTS_BEGIN,
});

const fetchAppointmentsSuccess = car => ({
  type: Types.FETCH_APPOINTMENTS_SUCCESS,
  payload: { car },
});

const fetchAppointmentsError = error => ({
  type: Types.FETCH_APPOINTMENTS_ERROR,
  payload: { error },
});

const fetchAppointments = () => dispatch => {
  dispatch(fetchAppointmentsBegin());
  return getAppointments()
    .then(async res => {
      await dispatch(fetchAppointmentsSuccess(res.data));
      return res.data;
    })
    .catch(err => dispatch(fetchAppointmentsError(err)));
};

export default fetchAppointments;
