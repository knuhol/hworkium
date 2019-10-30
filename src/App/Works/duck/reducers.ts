import { DELETE_WHOLE_WORK, SET_WHOLE_WORK, WorksActionTypes, WorksState } from './types';

const initialState: WorksState = [];

const worksReducer = (state = initialState, action: WorksActionTypes): WorksState => {
  switch (action.type) {
    case SET_WHOLE_WORK:
      return action.payload.works;
    case DELETE_WHOLE_WORK:
      return [];
    default:
      return state;
  }
};

export default worksReducer;
