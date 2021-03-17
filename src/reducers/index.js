import { combineReducers } from 'redux';
import cars from './cars';
import carReducer from './car';
import appointmentsReducer from './appointments';
import currentUser from './user';
import error from './error';
import loading from './loading';

export default combineReducers({
  cars,
  car: carReducer,
  appointments: appointmentsReducer,
  error,
  loading,
  currentUser,
});
