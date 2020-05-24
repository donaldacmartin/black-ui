import React from 'react';
import { connect } from 'react-redux';

const AUDIO_ID = "audio-player";

const stopIfPlaying = () => {
  const audio = document.getElementById(AUDIO_ID);

  if (audio !== undefined && audio !== null) {
    audio.pause();
    audio.currentTime = 0;
  }
};

const convertUrl = episode => episode.location.replace("/var/www/html", "")

const isNotNull = episode => episode !== undefined && episode !== null;
const episodeInList = (episode, list) => list.indexOf(episode) > -1;
const isValid = (episode, list) => isNotNull(episode) && episodeInList(episode, list);

const AudioPlayer = ({episodes, playingEpisode}) => {
  if (isValid(playingEpisode, episodes)) {    
    return (
      <audio
        id={AUDIO_ID}
        src={convertUrl(playingEpisode)}
        controls={false}
        autoPlay={true}
        preload="none"
      />
    );
  } else {
    stopIfPlaying();
    return <audio />;
  }
};

const mapStateToProps = state => ({
  episodes: state.episodes,
  playingEpisode: state.playingEpisode
});

export default connect(mapStateToProps, null)(AudioPlayer);
