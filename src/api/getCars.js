import API from './api';

const getCars = async () => {
  try {
    const res = await API.get('/cars');
    return res;
  } catch (err) {
    return err;
  }
};

export default getCars;
