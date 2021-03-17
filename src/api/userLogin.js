import { API } from './api';

const userLogin = async user => {
  try {
    const res = await API.post('/sessions', {
      email: user.email,
      password: user.password,
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default userLogin;
