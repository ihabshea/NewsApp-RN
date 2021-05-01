import {NewsResponse, NewsAction, SearchAction, Article} from '../../../types';
import {LOAD_NEWS, SEARCH_NEWS} from '../../actions/NewsActions/actionTypes';
import searchArticleTitle from './helpers/searchArticleTitle';

const initialState: NewsResponse = {
  status: 'pending',
  totalResults: 0,
  articles: [],
};
const newsReducer = (state = initialState, action: NewsAction) => {
  const {type} = action;
  switch (type) {
    case LOAD_NEWS:
      return action.news;
    case SEARCH_NEWS:
      let term: string = action.term || '';
      let filtered = state.articles.filter(article => searchArticleTitle(article, term));
      return {
        ...state,
        filtered
      };
    default:
      return state;
  }
};
export type NewsReducerType = ReturnType<typeof newsReducer>;
export default newsReducer;
