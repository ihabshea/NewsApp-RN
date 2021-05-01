import {ThemeAction, ThemeState} from '../../../types';
import {CHANGE_THEME} from '../../actions/ThemeActions/actionTypes';

const initialState: ThemeState = {
  theme: 'light',
};
const themeReducer = (state = initialState, action: ThemeAction) => {
  const {type} = action;
  switch (type) {
    case CHANGE_THEME:
      let theme: string = action.theme;
      return {
        ...state,
        theme,
      };
    default:
      return state;
  }
};
export type ThemeReducerType = ReturnType<typeof themeReducer>;
export default themeReducer;
