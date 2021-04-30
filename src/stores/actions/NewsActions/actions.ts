import {getTopHeadlines} from '../../../API';
import {TopNewsFilter} from '../../../types';
import {LOAD_NEWS} from './actionTypes';
export const loadNews = () => {
  return async (dispatch: any, getState: any) => {
    const initialFilter: TopNewsFilter = {
      country: 'us',
      category: 'business',
    };
    const response = await getTopHeadlines(initialFilter);
    return dispatch({
      type: LOAD_NEWS,
      news: response,
    });
  };
};
