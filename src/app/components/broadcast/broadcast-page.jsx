import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import BroadcastList from '../../containers/broadcast/broadcast-list';

const BroadcastPage = () => {
  return (
    <Container className="pt-3">
      <Row>
        <h1>Broadcasts</h1>
      </Row>
      <Row>
        <BroadcastList />
      </Row>
    </Container>
  );
};

export default BroadcastPage;
