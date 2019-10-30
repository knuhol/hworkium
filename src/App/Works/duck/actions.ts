import { DELETE_WHOLE_WORK, SET_WHOLE_WORK, Work, WorksActionTypes } from './types';

const setWholeWork = (works: Work[]): WorksActionTypes => ({
  type: SET_WHOLE_WORK,
  payload: { works },
});

const deleteWholeWork = (): WorksActionTypes => ({
  type: DELETE_WHOLE_WORK,
});

export { setWholeWork, deleteWholeWork };
