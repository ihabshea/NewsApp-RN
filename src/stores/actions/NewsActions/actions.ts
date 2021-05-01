import {getTopHeadlines} from '../../../API';
import {NewsResponse, TopNewsFilter} from '../../../types';
import {LOAD_NEWS, SEARCH_NEWS} from './actionTypes';
export const searchNews = (term: string) => {
  return (dispatch: any, getState: any) => {
    return dispatch({
      type: SEARCH_NEWS,
      term,
    });
  };
};
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
