import {CHANGE_LANGUAGE} from './actionTypes';
import i18n from '../../../i18n';
const changeLanguage = (language: string) => {
  return async (dispatch: any, getState: any) => {
    await i18n.changeLanguage(language);
    dispatch({
      type: CHANGE_LANGUAGE,
      language,
    });
  };
};

export {changeLanguage};
