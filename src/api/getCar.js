import AuthAPI from './api';

const getCars = async id => {
  try {
    const res = await AuthAPI.get(`/cars/${id}`);
    return res;
  } catch (err) {
    return err;
  }
};

export default getCars;
