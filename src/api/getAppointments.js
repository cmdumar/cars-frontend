import API from './api';

const getAppointments = async () => {
  try {
    const res = await API.get('/appointments');
    return res;
  } catch (err) {
    return err;
  }
};

export default getAppointments;
