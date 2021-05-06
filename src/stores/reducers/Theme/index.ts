import {ThemeAction, themeE, ThemeState} from '../../../types';
import {CHANGE_THEME} from '../../actions/ThemeActions/actionTypes';

const initialState: ThemeState = {
  theme: themeE.light,
};
const themeReducer = (state = initialState, action: ThemeAction) => {
  const {type} = action;
  switch (type) {
    case CHANGE_THEME:
      let theme: themeE = action.theme as themeE;
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
