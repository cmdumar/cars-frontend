import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import carReducer from './carReducer';
import appointmentsReducer from './appointmentsReducer';
import userReducer from './userReducer';

export default combineReducers({
  cars: carsReducer,
  car: carReducer,
  appointments: appointmentsReducer,
  userData: userReducer,
});
