import { ADD_JANITOR, REMOVE_JANITOR, JanitorsActionTypes, Janitor } from './types';

const addJanitor = (janitor: Janitor): JanitorsActionTypes => ({
  type: ADD_JANITOR,
  payload: { janitor },
});

const removeJanitor = (id: string): JanitorsActionTypes => ({
  type: REMOVE_JANITOR,
  payload: { id },
});

export { addJanitor, removeJanitor };
