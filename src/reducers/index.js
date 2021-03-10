import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import carReducer from './carReducer';
import appointmentsReducer from './appointmentsReducer';

export default combineReducers({
  cars: carsReducer,
  car: carReducer,
  appointments: appointmentsReducer,
});
