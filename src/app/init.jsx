import store from './store';

import { getEpisodeList } from './actions/episode-actions';
import { getBroadcastList } from './actions/broadcast-actions';
import { getStationList } from './actions/station-actions';

export default () => {
  store.dispatch(getEpisodeList());
  store.dispatch(getBroadcastList());
  store.dispatch(getStationList());
};
