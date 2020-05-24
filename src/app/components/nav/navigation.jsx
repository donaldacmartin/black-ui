import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({title}) => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Navbar.Brand>{title}</Navbar.Brand>
    </Navbar>
  );
};

export default Navigation;
