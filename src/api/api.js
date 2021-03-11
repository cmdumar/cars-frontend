import axios from 'axios';

const getToken = () => {
  const tokenString = localStorage.getItem('token');
  return tokenString;
};

const token = getToken();

export default axios.create({
  baseURL: 'https://safe-retreat-53793.herokuapp.com',
  headers: { Authorization: `Bearer ${token}` },
});
