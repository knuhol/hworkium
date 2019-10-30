import reject from 'lodash/reject';

import { ADD_JANITOR, JanitorsActionTypes, JanitorsState, REMOVE_JANITOR } from './types';

const initialState: JanitorsState = {
  list: [],
};

const janitorReducer = (state = initialState, action: JanitorsActionTypes): JanitorsState => {
  switch (action.type) {
    case ADD_JANITOR:
      return { list: [...state.list, action.payload.janitor] };
    case REMOVE_JANITOR:
      return { list: reject(state.list, { id: action.payload.id }) };
    default:
      return state;
  }
};

export default janitorReducer;
