import API from './api';
import getToken from '../helpers/getToken';

const getCars = async () => {
  try {
    const res = await API.get('/cars', {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default getCars;
