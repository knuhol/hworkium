import React from 'react';
import { Container, Col, Row, Button, Badge, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Tasks: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Row>
        <Col>
          <h1>{t('section.tasks')}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4 mb-4">{t('tasks.currentTasks')}</Col>
      </Row>
      <Row>
        <Col>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">{t('tasks.task')}</th>
                <th scope="col">{t('tasks.giveUp')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  Clean kitchen <Badge variant="warning">2</Badge>
                </td>
                <td>
                  <Button size="sm">
                    <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>
                  Go shopping <Badge variant="danger">4</Badge>
                </td>
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
              <tr>
                <th scope="row">3</th>
                <td>
                  Clean water fountain <Badge variant="success">1</Badge>
                </td>
                <td>
                  <Button size="sm">
                    <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                  </Button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  Vacuum-cleaning <Badge variant="warning">3</Badge>
                </td>
                <td>
                  <Button size="sm">
                    <FontAwesomeIcon icon={faTrashAlt} size="sm" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col lg={10}>
                <Form.Group>
                  <Form.Label>{t('tasks.moreTasks')}</Form.Label>
                  <Form.Control type="description" placeholder={t('tasks.description')} />
                </Form.Group>
              </Col>
              <Col lg={2}>
                <Form.Group controlId="difficulty">
                  <Form.Label>{t('tasks.difficulty')}</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" type="submit">
                  {t('tasks.add')}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Tasks;
