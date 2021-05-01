import {CHANGE_THEME} from './actionTypes';
const changeTheme = (theme: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch({
      type: CHANGE_THEME,
      theme,
    });
  };
};

export {changeTheme};
