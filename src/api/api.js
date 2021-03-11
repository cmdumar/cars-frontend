import axios from 'axios';

const token = localStorage.getItem('token');

export default axios.create({
  baseURL: 'https://safe-retreat-53793.herokuapp.com',
  headers: { Authorization: `Bearer ${token}` },
});
