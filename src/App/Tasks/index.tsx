import React, { useState } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import range from 'lodash/range';
import { useDispatch, useSelector } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addTask, removeTask } from './duck/actions';
import ItemRemovalTable from '../ItemRemovalTable';
import { Task } from './duck/types';
import { RootState } from '../../reducers';
import Title from '../Title';
import TaskItem, { MAX_DIFFICULTY } from '../TaskItem';
import { deleteWholeWork } from '../Works/duck/actions';

const Tasks: React.FC = () => {
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
    dispatch(addTask({ id: uuidv4(), name: newTask, difficulty: parseInt(newTaskDifficulty) }));
    dispatch(deleteWholeWork());
    setNewTask(NEW_TASK_DEFAULT_VALUE);
    setNewTaskDifficulty(NEW_TASK_DIFFICULTY_DEFAULT_VALUE);
  };

  const displayTask = (task: Task): React.ReactNode => (
    <TaskItem description={task.name} difficulty={task.difficulty} />
  );

  return (
    <Container>
      <Title headline={t('section.tasks')} introText={t('tasks.currentTasks')} />
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
