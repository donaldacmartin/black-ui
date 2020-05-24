import {
  GET_EPISODE_LIST,
  PLAY_EPISODE,
  STOP_PLAYBACK,
  LOG_ERROR,
} from '../actions/action-types';

export const EpisodeListReducer = function(state = [], action) {
  switch (action.type) {
    case GET_EPISODE_LIST:
      return action.payload;
    default:
      return state;
  }
};

export const EpisodePlayReducer = function(state = null, action) {
  switch (action.type) {
    case PLAY_EPISODE:
      return action.payload;
    case STOP_PLAYBACK:
      return null;
    default:
      return state;
  }
}

export const EpisodeErrorReducer = function(state = null, action) {
  switch (action.type) {
    case LOG_ERROR:
      console.log(action.payload);
      return null;
    default:
      return state;
  }
}
