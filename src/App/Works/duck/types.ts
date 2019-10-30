import { Janitor } from '../../Janitors/duck/types';
import { Task } from '../../Tasks/duck/types';

export const SET_WHOLE_WORK = 'hworkium/janitors/SET_WHOLE_WORK';
export const DELETE_WHOLE_WORK = 'hworkium/janitors/DELETE_WHOLE_WORK';

export interface Work {
  // TODO: Do we want to use just IDs here for optimization purposes?
  janitor: Janitor;
  tasks: Task[];
  difficulty: number;
}

interface SetWholeWorkAction {
  type: typeof SET_WHOLE_WORK;
  payload: { works: Work[] };
}

interface DeleteWholeWorkAction {
  type: typeof DELETE_WHOLE_WORK;
}

export type WorksState = Work[];

export type WorksActionTypes = SetWholeWorkAction | DeleteWholeWorkAction;
