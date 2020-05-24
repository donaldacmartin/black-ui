import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import prettyBytes from 'pretty-bytes';

import EpisodeRow from '../../components/episode/episode-row';
import { playEpisode, stopPlayback, deleteEpisode } from '../../actions/episode-actions';

const CLASS_HIDE = "d-none d-md-table-cell";

const filesize = es => es.map(e => e.lengthBytes).reduce((a, b) => a + b, 0);

const EpisodeList = ({episodes, playingEpisode, play, stop, remove}) => {

  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th className={CLASS_HIDE}>Station</th>
          <th>Broadcast</th>
          <th className={CLASS_HIDE}>Filesize</th>
          <th>Play</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map(e =>
          <EpisodeRow
            key={e.uuid}
            episode={e}
            isPlaying={playingEpisode === e}
            play={play}
            stop={stop}
            remove={remove}
          />)
        }
        <tr>
          <td></td>
          <td className={CLASS_HIDE}></td>
          <td></td>
          <th className={CLASS_HIDE}>{prettyBytes(filesize(episodes))}</th>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => ({
  episodes: state.episodes,
  playingEpisode: state.playingEpisode
});

const mapDispatchToProps = dispatch => ({
  play: e => dispatch(playEpisode(e)),
  stop: () => dispatch(stopPlayback()),
  remove: e => dispatch(deleteEpisode(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeList);
