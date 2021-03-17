import Types from '../actions/types';

export default (state = [], action) => {
  if (action.type === Types.SET_CAR) {
    return action.car;
  }
  return state;
};
