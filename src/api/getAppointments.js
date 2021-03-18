import API from './api';
import getToken from '../helpers/getToken';

const getAppointments = async () => {
  try {
    const res = await API.get('/appointments', {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default getAppointments;
