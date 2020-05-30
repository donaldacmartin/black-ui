import axios from 'axios';

import { GET_BROADCAST_LIST, LOG_ERROR } from './action-types';

export const getBroadcastList = () => {
  return dispatch => {
    axios
      .get('/black/broadcast')
      .then(r => dispatch({ type: GET_BROADCAST_LIST, payload: r.data }))
      .catch(e => dispatch(logError(e)));
  };
};

export const logError = error => ({ type: LOG_ERROR, payload: error });
