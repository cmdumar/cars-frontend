import Types from '../actions/types';

export default (state = null, action) => {
  if (action.type === Types.SET_CURRENT_USER) {
    return action.currentUser;
  }
  return state;
};
