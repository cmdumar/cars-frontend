const getToken = () => {
  const tokenString = localStorage.getItem('token');
  return tokenString;
};

export default getToken;
