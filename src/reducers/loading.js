import Types from '../actions/types';

export default (state = false, action) => {
  if (action.type === Types.SET_FETCHING) {
    return action.payload;
  }
  return state;
};
