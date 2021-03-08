import API from './api';

const getCars = async id => {
  try {
    const res = await API.get(`/cars/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};

export default getCars;
