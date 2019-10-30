import reject from 'lodash/reject';

import { ADD_TASK, REMOVE_TASK, Task, TasksActionTypes, TasksState } from './types';

const initialState: TasksState = [];

const tasksReducer = (state = initialState, action: TasksActionTypes): TasksState => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload.task];
    case REMOVE_TASK:
      return reject<Task>(state, { id: action.payload.id });
    default:
      return state;
  }
};

export default tasksReducer;
