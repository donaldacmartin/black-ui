import React from 'react';
import Button from 'react-bootstrap/Button';
import prettyBytes from 'pretty-bytes';
import moment from 'moment';

const CLASS_HIDE = "d-none d-md-table-cell";
const DT_FORMAT = "YYYY-MM-DD HH:mm";
const PLAY_BTN = "progress-bar progress-bar-striped progress-bar-animated bg-warning";

const playbackButton = (episode, isPlaying, play, stop) => {
  const playFunc = () => play(episode);
  const stopFunc = () => stop();

  if (isPlaying) {
    return <Button className={PLAY_BTN} variant="warning" onClick={stopFunc}>Stop</Button>
  } else {
    return <Button variant="info" onClick={playFunc}>Play</Button>;
  }
}

const EpisodeRow = ({episode, isPlaying, play, stop, remove}) => {
  const deleteFunc = () => {
    if (isPlaying) {
      stop();
    }
    
    remove(episode);
  }

  return (
    <tr>
      <td>{episode.broadcast.name}</td>
      <td className={CLASS_HIDE}>{episode.broadcast.station.name}</td>
      <td>{moment(episode.start).format(DT_FORMAT)}</td>
      <td className={CLASS_HIDE}>{prettyBytes(episode.lengthBytes)}</td>
      <td>{playbackButton(episode, isPlaying, play, stop)}</td>
      <td><Button variant="danger" onClick={deleteFunc}>Delete</Button></td>
    </tr>
  );
};

export default EpisodeRow;
