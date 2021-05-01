import {LanguageAction, LangagaeState} from '../../../types';
import {CHANGE_LANGUAGE} from '../../actions/LanguageActions/actionTypes';

const initialState: LangagaeState = {
  language: 'en',
};
const languageReducer = (state = initialState, action: LanguageAction) => {
  const {type} = action;
  switch (type) {
    case CHANGE_LANGUAGE:
      let language: string = action.language;
      return {
        ...state,
        language,
      };
    default:
      return state;
  }
};
export type LanguageReducerType = ReturnType<typeof languageReducer>;
export default languageReducer;
