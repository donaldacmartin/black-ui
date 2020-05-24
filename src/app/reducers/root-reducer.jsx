import { combineReducers } from '@reduxjs/toolkit';

import {
  EpisodeListReducer,
  EpisodePlayReducer,
  EpisodeErrorReducer
} from './episode-reducer';

export default combineReducers({
  episodes: EpisodeListReducer,
  playingEpisode: EpisodePlayReducer,
  error: EpisodeErrorReducer,
});
