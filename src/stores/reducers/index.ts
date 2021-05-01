import {combineReducers} from 'redux';
import newsReducer from './News';
import languageReducer from './Language';

const rootReducer = combineReducers({languageReducer, newsReducer});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
