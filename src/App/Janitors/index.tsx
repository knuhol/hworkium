import React, { SyntheticEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import uuidv4 from 'uuid/v4';

import { AppState } from '../../reducers';
import { addJanitor } from './duck/actions';
import { Janitor } from './duck/types';

const Janitors: React.FC = () => {
  const [newJanitor, setNewJanitor] = useState('');
  const { t } = useTranslation();
  const janitors = useSelector((state: AppState) => state.janitors.list);
  const dispatch = useDispatch();

  const onNewJanitorChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setNewJanitor(event.target.value);

  const onNewJanitorClick = (event: SyntheticEvent): void => {
    event.preventDefault();
    dispatch(addJanitor({ id: uuidv4(), name: newJanitor }));
    setNewJanitor('');
  };

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
              {janitors.map((janitor: Janitor, index: number) => (
                <tr key={janitor.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{janitor.name}</td>
                  <td>
                    <Button size="sm">
                      <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <th scope="row">2</th>
                <td>Knut</td>
                <td>
                  {t('global.really')}
                  <Button variant="success" className="ml-2" size="sm">
                    {t('global.yes')}
                  </Button>
                  <Button variant="danger" className="ml-2" size="sm">
                    {t('global.no')}
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <Form>
            <Form.Group>
              <Form.Label>{t('janitors.moreJanitors')}</Form.Label>
              <Form.Control
                type="text"
                value={newJanitor}
                onChange={onNewJanitorChange}
                placeholder={t('janitors.name')}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onNewJanitorClick}>
              {t('janitors.add')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Janitors;
