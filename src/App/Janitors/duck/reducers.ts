import { ADD_JANITOR, JanitorsActionTypes, JanitorsState } from './types';

const initialState: JanitorsState = {
  list: [],
};

const janitorReducer = (state = initialState, action: JanitorsActionTypes): JanitorsState => {
  switch (action.type) {
    case ADD_JANITOR:
      return { list: [...state.list, action.payload.janitor] };
    default:
      return state;
  }
};

export default janitorReducer;
