import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import { ROUTE } from './routes';

const App: React.FC = () => (
  <>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path={ROUTE.HOME}>
          <div></div>
        </Route>
        <div className="mt-3">
          <Container>
            <Route ecxact path={ROUTE.HELLO_WORLD}>
              <Row>
                <Col>
                  <h1>Hello world!</h1>
                </Col>
              </Row>
            </Route>
            <Route exact path={ROUTE.TEST}>
              <Row>
                <Col>
                  <h1>Test</h1>
                </Col>
              </Row>
            </Route>
          </Container>
        </div>
      </Switch>
    </Router>
  </>
);

export default App;
