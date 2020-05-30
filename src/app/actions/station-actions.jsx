import axios from 'axios';

import { GET_STATION_LIST, LOG_ERROR } from './action-types';

export const getStationList = () => {
  return dispatch => {
    axios
      .get('/black/station')
      .then(r => dispatch({ type: GET_STATION_LIST, payload: r.data }))
      .catch(e => dispatch(logError(e)));
  };
};

export const logError = error => ({ type: LOG_ERROR, payload: error });
