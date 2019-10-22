import React from 'react';

import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import { ROUTES } from '../routes';

const NavigationBar: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="sm">
    <Navbar.Brand as={Link} to={ROUTES.HOME}>
      Hworkium
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link as={Link} to={ROUTES.HELLO_WORLD} href="#">
          Hello world
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
