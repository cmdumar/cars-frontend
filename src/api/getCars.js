import AuthAPI from './api';

const getCars = async () => {
  try {
    const res = await AuthAPI.get('/cars');
    return res;
  } catch (err) {
    return err;
  }
};

export default getCars;
