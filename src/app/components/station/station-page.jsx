import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import StationList from '../../containers/station/station-list';

const StationPage = () => {
  return (
    <Container className="pt-3">
      <Row>
        <h1>Stations</h1>
      </Row>
      <Row>
        <StationList />
      </Row>
    </Container>
  );
};

export default StationPage;
