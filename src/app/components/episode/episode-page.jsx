import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import EpisodeList from '../../containers/episode/episode-list';
import AudioPlayer from '../../containers/audio/audio-player';

const EpisodePage = () => {
  return (
    <Container className="pt-3">
      <Row>
        <h1>Episodes</h1>
      </Row>
      <Row>
        <EpisodeList />
      </Row>
      <AudioPlayer />
    </Container>
  );
};

export default EpisodePage;
