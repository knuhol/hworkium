import React from 'react';

import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { ROUTE } from '../routes';

const NavigationBar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand as={NavLink} to={ROUTE.HOME}>
        {t('appName')}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to={ROUTE.JANITORS}>
            {t('section.janitors')}
          </Nav.Link>
          <Nav.Link as={NavLink} to={ROUTE.TASKS}>
            {t('section.tasks')}
          </Nav.Link>
          <Nav.Link as={NavLink} to={ROUTE.WORK}>
            {t('section.works')}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
