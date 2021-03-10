import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import carReducer from './carReducer';

export default combineReducers({
  cars: carsReducer,
  car: carReducer,
});
