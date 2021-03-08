import { combineReducers } from 'redux';
import cars from './carsReducer';
import car from './carReducer';

export default combineReducers({
  cars,
  car,
});
