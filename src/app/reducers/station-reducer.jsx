import { GET_STATION_LIST } from '../actions/action-types';

export const StationListReducer = function(state = [], action) {
  switch (action.type) {
    case GET_STATION_LIST:
      return action.payload;
    default:
      return state;
  }
};
