import Types from '../actions/types';

export default (state = [], action) => {
  if (action.type === Types.SET_CARS) {
    return action.cars;
  }
  return state;
};
