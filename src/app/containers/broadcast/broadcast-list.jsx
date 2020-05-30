import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import InputGroup from 'react-bootstrap/InputGroup';

const CLASS_HIDE = "d-none d-lg-table-cell";

const checkbox = b => {
  if (b) {
    return <InputGroup.Checkbox checked disabled />;
  } else {
    return <InputGroup.Checkbox disabled />;
  }
  
};

const BroadcastList = ({broadcasts}) => {
  return (
    <Table striped hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Station</th>
          <th>Start</th>
          <th>Timezone</th>
          <th className={CLASS_HIDE}>Length (mins)</th>
          <th className={CLASS_HIDE}>Mon</th>
          <th className={CLASS_HIDE}>Tue</th>
          <th className={CLASS_HIDE}>Wed</th>
          <th className={CLASS_HIDE}>Thu</th>
          <th className={CLASS_HIDE}>Fri</th>
          <th className={CLASS_HIDE}>Sat</th>
          <th className={CLASS_HIDE}>Sun</th>
        </tr>
      </thead>
      <tbody>
        {broadcasts.map(b => 
          <tr key={b.uuid}>
            <td>{b.name}</td>
            <td>{b.station.name}</td>
            <td>{b.startTime}</td>
            <td>{b.timezone}</td>
            <td className={CLASS_HIDE}>{b.lengthInMinutes}</td>
            <td className={CLASS_HIDE}>{checkbox(b.monday)}</td>
            <td className={CLASS_HIDE}>{checkbox(b.tuesday)}</td>
            <td className={CLASS_HIDE}>{checkbox(b.wednesday)}</td>
            <td className={CLASS_HIDE}>{checkbox(b.thursday)}</td>
            <td className={CLASS_HIDE}>{checkbox(b.friday)}</td>
            <td className={CLASS_HIDE}>{checkbox(b.saturday)}</td>
            <td className={CLASS_HIDE}>{checkbox(b.sunday)}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

const mapStateToProps = state => ({
  broadcasts: state.broadcasts
});

export default connect(mapStateToProps, null)(BroadcastList);
