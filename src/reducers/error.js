import Types from '../actions/types';

export default (state = null, action) => {
  if (action.type === Types.SET_ERROR) {
    return action.error;
  }
  return state;
};
