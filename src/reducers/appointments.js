import Types from '../actions/types';

export default (state = [], action) => {
  if (action.type === Types.SET_APPOINTMENTS) {
    return action.appointments;
  }
  return state;
};
