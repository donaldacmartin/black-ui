import { GET_BROADCAST_LIST } from '../actions/action-types';

export const BroadcastListReducer = function(state = [], action) {
  switch (action.type) {
    case GET_BROADCAST_LIST:
      return action.payload;
    default:
      return state;
  }
};
