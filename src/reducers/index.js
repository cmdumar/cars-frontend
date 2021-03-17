import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import carReducer from './carReducer';
import appointmentsReducer from './appointmentsReducer';
import currentUser from './user';
import error from './error';
import loading from './loading';

export default combineReducers({
  cars: carsReducer,
  car: carReducer,
  appointments: appointmentsReducer,
  error,
  loading,
  currentUser,
});
