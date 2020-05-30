import React from 'react';
import { LinkContainer } from "react-router-bootstrap";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = props => {

  const pages = !props.pages ? [] : props.pages.map(page => (
    <LinkContainer to={page.link} key={page.link}>
      <Nav.Link>{page.title}</Nav.Link>
    </LinkContainer>
  ));

  const collapseController = pages.length === 0 ? <div /> : (
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  );

  const collapseNav = pages.length === 0 ? <div /> : (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {pages}
      </Nav>
    </Navbar.Collapse>
  );

  return (
    <Navbar bg="dark" variant="dark" expand="md">

      <Navbar.Brand>{props.title}</Navbar.Brand>
      {collapseController}
      {collapseNav}

    </Navbar>
  );

};

export default Navigation;
