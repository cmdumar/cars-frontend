import API from './api';

const userSignup = async user => {
  try {
    const res = await API.post('/users', {
      name: user.name,
      email: user.email,
      password: user.password,
    });
    return res;
  } catch (err) {
    return err;
  }
};

export default userSignup;
