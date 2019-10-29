import React from 'react';
import { Col, Container, Row, Form, Button, Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck, faCross} from '@fortawesome/free-solid-svg-icons';

const Janitors: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Row>
        <Col>
          <h1>{t('section.janitors')}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4 mb-4">{t('janitors.currentJanitors')}</Col>
      </Row>
      <Row>
        <Col lg={6}>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{t('janitors.janitor')}</th>
                <th scope="col">{t('janitors.fire')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Tereza</td>
                <td>
                  <Button className="ml-2" size="sm">
                    <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Knut</td>
                <td>
                  {t('janitors.really')}
                  <Button variant="success" className="ml-2" size="sm">
                    {t('janitors.yes')}
                  </Button>
                  <Button variant="danger" className="ml-2" size="sm">
                    {t('janitors.no')}
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">{t('janitors.moreJanitors')}</Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form>
            <Form.Group>
              <Form.Control type="name" placeholder={t('janitors.name')} />
            </Form.Group>
            <Button variant="primary" type="submit">
              {t('janitors.add')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Janitors;
