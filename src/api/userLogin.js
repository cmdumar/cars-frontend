import axios from 'axios';

const API = axios.create({
  baseURL: 'https://safe-retreat-53793.herokuapp.com',
});

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
