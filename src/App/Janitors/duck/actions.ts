import { ADD_JANITOR, JanitorsActionTypes } from './types';

import { Janitor } from './types';

const addJanitor = (janitor: Janitor): JanitorsActionTypes => ({
  type: ADD_JANITOR,
  payload: { janitor },
});

export { addJanitor };
