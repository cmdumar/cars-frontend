import { combineReducers } from 'redux';
import carsReducer from './carsReducer';
import car from './carReducer';

export default combineReducers({
  cars: carsReducer,
  car,
});
