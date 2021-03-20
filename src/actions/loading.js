import Types from './types';

const setFetching = state => ({
  type: Types.SET_FETCHING,
  payload: state,
});

export default setFetching;
