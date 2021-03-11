import axios from 'axios';

const API = axios.create({
  baseURL: 'https://safe-retreat-53793.herokuapp.com',
});

const getToken = () => {
  const tokenString = localStorage.getItem('token');
  return tokenString;
};

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
