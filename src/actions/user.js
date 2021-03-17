import Types from './types';
import userLogin from '../api/userLogin';
import userSignup from '../api/userSignup';
import setError from './error';
import setFetching from './loading';

const setCurrentUser = currentUser => ({
  type: Types.SET_CURRENT_USER,
  currentUser,
});

const login = user => async dispatch => {
  try {
    dispatch(setFetching(true));
    const res = await userLogin(user);
    dispatch(setFetching(false));
    const { data } = res;
    if (data) dispatch(setCurrentUser(data));
    return data;
  } catch (e) {
    dispatch(setError(e));
    return e;
  }
};

const signup = user => async dispatch => {
  try {
    dispatch(setFetching(true));
    const res = await userSignup(user);
    dispatch(setFetching(false));
    const { data } = res;
    if (data) dispatch(setCurrentUser(data));
    return data;
  } catch (e) {
    dispatch(setError(e.response.data));
    return e;
  }
};

export { login, signup };
