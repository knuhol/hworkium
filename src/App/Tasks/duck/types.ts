export const ADD_TASK = 'hworkium/janitors/ADD_TASK';
export const REMOVE_TASK = 'hworkium/janitors/REMOVE_TASK';

export interface Task {
  id: string;
  name: string;
  difficulty: number;
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: { task: Task };
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: { id: string };
}

export type TasksState = Task[];

export type TasksActionTypes = AddTaskAction | RemoveTaskAction;
