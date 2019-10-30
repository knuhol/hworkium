import React, { useState } from 'react';
import { Container, Col, Row, Button, Badge, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import range from 'lodash/range';
import { useDispatch, useSelector } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addTask, removeTask } from './duck/actions';
import ItemRemovalTable from '../ItemRemovalTable';
import { Task } from './duck/types';
import { RootState } from '../../reducers';

const Tasks: React.FC = () => {
  const MAX_DIFFICULTY = 6;
  const NEW_TASK_DEFAULT_VALUE = '';
  const NEW_TASK_DIFFICULTY_DEFAULT_VALUE = '1';

  const [newTask, setNewTask] = useState(NEW_TASK_DEFAULT_VALUE);
  const [newTaskDifficulty, setNewTaskDifficulty] = useState(NEW_TASK_DIFFICULTY_DEFAULT_VALUE);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks);

  const onNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setNewTask(event.target.value);

  const ontNewTaskDifficultyChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setNewTaskDifficulty(event.target.value);

  const onNewTaskClick = (): void => {
    console.log('onNewTaskClick');
    dispatch(addTask({ id: uuidv4(), name: newTask, difficulty: parseInt(newTaskDifficulty) }));
    setNewTask(NEW_TASK_DEFAULT_VALUE);
    setNewTaskDifficulty(NEW_TASK_DIFFICULTY_DEFAULT_VALUE);
  };

  const displayTask = (task: Task): React.ReactNode => {
    const quotient = Math.floor(MAX_DIFFICULTY / 3);
    const remainder = MAX_DIFFICULTY % 3;

    let variant: 'success' | 'warning' | 'danger';
    if (task.difficulty <= quotient) {
      variant = 'success';
    } else if (task.difficulty <= quotient * 2 + remainder) {
      variant = 'warning';
    } else {
      variant = 'danger';
    }

    return (
      <>
        {task.name} <Badge variant={variant}>{task.difficulty}</Badge>
      </>
    );
  };

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
          <ItemRemovalTable
            itemBodyHeadline={t('tasks.task')}
            itemRemovalHeadline={t('tasks.giveUp')}
            items={tasks}
            removeItem={removeTask}
            displayItem={displayTask}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Row>
              <Col lg={10}>
                <Form.Group>
                  <Form.Label>{t('tasks.moreTasks')}</Form.Label>
                  <Form.Control
                    type="text"
                    value={newTask}
                    placeholder={t('tasks.description')}
                    onChange={onNewTaskChange}
                  />
                </Form.Group>
              </Col>
              <Col lg={2}>
                <Form.Group controlId="difficulty">
                  <Form.Label>{t('tasks.difficulty')}</Form.Label>
                  <Form.Control
                    value={newTaskDifficulty}
                    as="select"
                    onChange={ontNewTaskDifficultyChange}
                  >
                    {range(1, MAX_DIFFICULTY + 1).map(difficulty => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="primary" onClick={onNewTaskClick}>
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
