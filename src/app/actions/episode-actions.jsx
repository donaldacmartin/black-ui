import axios from 'axios';

import {
  GET_EPISODE_LIST,
  PLAY_EPISODE,
  STOP_PLAYBACK,
  LOG_ERROR
} from './action-types';

export const getEpisodeList = () => {
  return dispatch => {
    axios
      .get('/black/episode')
      .then(r => dispatch({ type: GET_EPISODE_LIST, payload: r.data }))
      .catch(e => dispatch(logError(e)));
  };
};

export const playEpisode = episode => ({ type: PLAY_EPISODE, payload: episode });

export const stopPlayback = () => ({ type: STOP_PLAYBACK });

export const deleteEpisode = episode => {
  return dispatch => {    
    axios
      .delete(`/black/episode/${episode.uuid}`)
      .then(_ => dispatch(getEpisodeList()))
      .catch(e => dispatch(logError(e)));
  };
};

export const logError = error => ({ type: LOG_ERROR, payload: error });
