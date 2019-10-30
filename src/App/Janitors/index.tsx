import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import uuidv4 from 'uuid/v4';

import { RootState } from '../../reducers';
import { addJanitor, removeJanitor } from './duck/actions';
import ItemRemovalTable from '../ItemRemovalTable';
import { Janitor } from './duck/types';

const Janitors: React.FC = () => {
  const [newJanitor, setNewJanitor] = useState('');
  const { t } = useTranslation();
  const janitors = useSelector((state: RootState) => state.janitors);
  const dispatch = useDispatch();

  const onNewJanitorChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setNewJanitor(event.target.value);

  const onNewJanitorClick = (): void => {
    dispatch(addJanitor({ id: uuidv4(), name: newJanitor }));
    setNewJanitor('');
  };

  const displayJanitor = (janitor: Janitor): React.ReactNode => janitor.name;

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
          <ItemRemovalTable
            itemBodyHeadline={t('janitors.janitor')}
            itemRemovalHeadline={t('janitors.fire')}
            items={janitors}
            removeItem={removeJanitor}
            displayItem={displayJanitor}
          />
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
            <Button variant="primary" onClick={onNewJanitorClick}>
              {t('janitors.add')}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Janitors;
