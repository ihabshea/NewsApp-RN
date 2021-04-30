import {combineReducers} from 'redux';
import newsReducer from './News';

const rootReducer = combineReducers({
    newsReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>