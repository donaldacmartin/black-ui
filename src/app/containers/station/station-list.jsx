import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';

const StationList = ({stations}) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {stations.map(s => 
          <tr key={s.uuid}>
            <td>{s.name}</td>
            <td><InputGroup.Text disabled>{s.url}</InputGroup.Text></td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => ({
  stations: state.stations
});

export default connect(mapStateToProps, null)(StationList);
