import { combineReducers } from 'redux';

import janitorsReducer from './App/Janitors/duck/reducers';

const rootReducer = combineReducers({ janitors: janitorsReducer });

export default rootReducer;
export type AppState = ReturnType<typeof rootReducer>;
