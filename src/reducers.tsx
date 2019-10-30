import { combineReducers } from 'redux';

import janitorsReducer from './App/Janitors/duck/reducers';
import tasksReducer from './App/Tasks/duck/reducers';

const rootReducer = combineReducers({ janitors: janitorsReducer, tasks: tasksReducer });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
