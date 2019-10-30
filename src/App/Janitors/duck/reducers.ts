import reject from 'lodash/reject';

import { ADD_JANITOR, Janitor, JanitorsActionTypes, JanitorsState, REMOVE_JANITOR } from './types';

const initialState: JanitorsState = [];

const janitorsReducer = (state = initialState, action: JanitorsActionTypes): JanitorsState => {
  switch (action.type) {
    case ADD_JANITOR:
      return [...state, action.payload.janitor];
    case REMOVE_JANITOR:
      return reject<Janitor>(state, { id: action.payload.id });
    default:
      return state;
  }
};

export default janitorsReducer;
