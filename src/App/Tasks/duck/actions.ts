import { ADD_TASK, REMOVE_TASK, Task, TasksActionTypes } from './types';

const addTask = (task: Task): TasksActionTypes => ({
  type: ADD_TASK,
  payload: { task },
});

const removeTask = (id: string): TasksActionTypes => ({
  type: REMOVE_TASK,
  payload: { id },
});

export { addTask, removeTask };
