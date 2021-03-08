import axios from 'axios';

export default axios.create({
  baseURL: 'https://safe-retreat-53793.herokuapp.com',
  headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.JC6qKuH9SG0SIiYSfhZUFTtirxN9Q47buLk0DPFFFzE' },
});
