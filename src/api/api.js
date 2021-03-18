import axios from 'axios';

const API = axios.create({
  baseURL: 'https://safe-retreat-53793.herokuapp.com',
});

export default API;
