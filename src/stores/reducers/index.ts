import {combineReducers} from 'redux';
import newsReducer from './News';
import languageReducer from './Language';
import themeReducer from './Theme';

const rootReducer = combineReducers({
  languageReducer,
  themeReducer,
  newsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
