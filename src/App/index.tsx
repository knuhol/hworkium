import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationBar from './NavigationBar';
import { ROUTES } from './routes';

const App: React.FC = () => (
  <>
    <Router>
      <NavigationBar />
      <Switch>
        <Route path={ROUTES.HOME}>
          <div></div>
        </Route>
        <Route path={ROUTES.HELLO_WORLD}>
          <div className="mt-3">
            <Container>
              <Row>
                <Col>
                  <h1>Hello world!</h1>
                </Col>
              </Row>
            </Container>
          </div>
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
