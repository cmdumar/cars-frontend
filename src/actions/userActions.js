import Types from './actionTypes';
import userLogin from '../api/userLogin';

const loginBegin = () => ({
  type: Types.LOGIN_BEGIN,
});

const loginSuccess = user => ({
  type: Types.LOGIN_SUCCESS,
  payload: { user },
});

const loginError = error => ({
  type: Types.LOGIN_ERROR,
  payload: { error },
});

const login = user => dispatch => {
  dispatch(loginBegin());
  return userLogin(user)
    .then(async res => {
      await dispatch(loginSuccess(res.data));
      return res.data;
    })
    .catch(err => dispatch(loginError(err)));
};

export default login;
