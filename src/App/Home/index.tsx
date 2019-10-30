import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Title from '../Title';
import { ROUTE } from '../routes';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title headline={t('appName')} introText={t('home.intro')} />
      <Row>
        <Col>
          <p>{t('home.description')}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h3>{t('home.howDoesItWork.headline')}</h3>
          <p>{t('home.howDoesItWork.intro')}</p>
          <ol>
            <li>
              <Trans i18nKey="home.howDoesItWork.1">
                Go to <Link to={ROUTE.JANITORS}>Janitor</Link> page and add all household members
                who will participate on housework.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="home.howDoesItWork.2">
                Go to <Link to={ROUTE.TASKS}>Tasks</Link> page and add all tasks which has to be
                done.
              </Trans>
            </li>
            <li>
              <Trans i18nKey="home.howDoesItWork.3">
                Go to <Link to={ROUTE.WORKS}>Works</Link> page and lick a magic button.
              </Trans>
            </li>
            <li>{t('home.howDoesItWork.4')}</li>
          </ol>
          <p>{t('home.howDoesItWork.finalWorlds')}</p>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h4>{t('home.version.title')} 1.0</h4>
          <p>{t('home.version.description')} </p>
          <ul>
            <li>
              <strong>{t('home.version.feature')}</strong> {t('home.version.1')}
            </li>
            <li>
              <strong>{t('home.version.missing')}</strong> {t('home.version.2')}
            </li>
            <li>
              <strong>{t('home.version.missing')}</strong> {t('home.version.3')}
            </li>
            <li>
              <strong>{t('home.version.missing')}</strong> {t('home.version.4')}
            </li>
            <li>
              <strong>{t('home.version.missing')}</strong> {t('home.version.5')}
            </li>
            <li>
              <strong>{t('home.version.missing')}</strong> {t('home.version.6')}
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <h4>{t('home.credits.title')}</h4>
          <p>{t('home.credits.author')}</p>
          <p>
            <Trans i18nKey="home.credits.gitHub">
              Interested in used technologies? Missing features? Want to improve this app or fork
              it? Continue to <a href="https://github.com/knuhol/hworkium">GitHub</a>!
            </Trans>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
