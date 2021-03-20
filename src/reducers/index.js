import { combineReducers } from 'redux';
import cars from './cars';
import car from './car';
import appointments from './appointments';
import currentUser from './user';
import error from './error';
import loading from './loading';

export default combineReducers({
  cars,
  car,
  appointments,
  error,
  loading,
  currentUser,
});
