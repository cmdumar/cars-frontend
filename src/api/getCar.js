import API from './api';
import getToken from '../helpers/getToken';

const getCar = async id => {
  try {
    const res = await API.get(`/cars/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default getCar;
