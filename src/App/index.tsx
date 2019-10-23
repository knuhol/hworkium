import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import NavigationBar from './NavigationBar';
import { ROUTE } from './routes';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path={ROUTE.HOME}>
            <></>
          </Route>

          <Route ecxact path={ROUTE.HELLO_WORLD}>
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
          <Route exact path={ROUTE.TEST}>
            <div className="mt-3">
              <Container>
                <Row>
                  <Col>
                    <h1>{t('test')}</h1>
                  </Col>
                </Row>
              </Container>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
