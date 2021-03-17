import Types from './types';

const setError = error => ({
  type: Types.SET_ERRORS,
  payload: { error },
});

export default setError;
