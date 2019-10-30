import { combineReducers } from 'redux';

import janitorsReducer from './App/Janitors/duck/reducers';
import tasksReducer from './App/Tasks/duck/reducers';
import worksReducer from './App/Works/duck/reducers';

const rootReducer = combineReducers({
  janitors: janitorsReducer,
  tasks: tasksReducer,
  works: worksReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
