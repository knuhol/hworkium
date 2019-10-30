import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Container, Row } from 'react-bootstrap';
import minBy from 'lodash/minBy';
import shuffle from 'lodash/shuffle';

import Title from '../Title';
import TaskItem, { MAX_DIFFICULTY } from '../TaskItem';
import { Task } from '../Tasks/duck/types';
import { Work } from './duck/types';
import { setWholeWork } from './duck/actions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers';

const Works: React.FC = () => {
  const { t } = useTranslation();
  const janitors = useSelector((state: RootState) => state.janitors);
  const tasks = useSelector((state: RootState) => state.tasks);
  const works = useSelector((state: RootState) => state.works);
  const dispatch = useDispatch();

  const initWorks = (): Work[] => {
    const emptyWorks: Work[] = [];

    janitors.forEach(janitor => {
      const work = {
        janitor,
        tasks: [],
        difficulty: 0,
      };

      emptyWorks.push(work);
    });

    return shuffle(emptyWorks);
  };

  const assignWorks = (assignedWorks: Work[], currentDifficultyTasks: Task[]): void =>
    currentDifficultyTasks.forEach(task => {
      const work = minBy(assignedWorks, 'difficulty');

      if (work) {
        work.difficulty += task.difficulty;
        work.tasks.push(task);
      }
    });

  const getCurrentDifficultyTasks = (difficulty: number): Task[] =>
    shuffle(tasks.filter(task => task.difficulty === difficulty));

  const onAssignTasksClick = (): void => {
    const assignedWorks = initWorks();

    for (let difficulty = MAX_DIFFICULTY; difficulty >= 1; difficulty--) {
      const currentDifficultyTasks = getCurrentDifficultyTasks(difficulty);
      assignWorks(assignedWorks, currentDifficultyTasks);
    }

    assignedWorks.forEach(work => {
      work.tasks = shuffle(work.tasks);
    });

    dispatch(setWholeWork(assignedWorks));
  };

  return (
    <Container>
      <Title headline={t('section.works')} introText={t('works.start')} />
      <Row>
        {works.map(work => (
          <Col lg={3} sm={6} key={work.janitor.name} className="mb-2">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">{work.janitor.name}</th>
                </tr>
              </thead>
              <tbody>
                {work.tasks.map((task: Task, index: number) => (
                  <tr key={task.id}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <TaskItem description={task.name} difficulty={task.difficulty} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={onAssignTasksClick}>
            {t('works.assign')}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Works;
