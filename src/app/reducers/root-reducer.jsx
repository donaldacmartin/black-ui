import { combineReducers } from '@reduxjs/toolkit';

import {
  EpisodeListReducer,
  EpisodePlayReducer,
  EpisodeErrorReducer
} from './episode-reducer';

import { BroadcastListReducer } from './broadcast-reducer';
import { StationListReducer } from './station-reducer';

export default combineReducers({
  episodes: EpisodeListReducer,
  broadcasts: BroadcastListReducer,
  stations: StationListReducer,
  playingEpisode: EpisodePlayReducer,
  error: EpisodeErrorReducer,
});
