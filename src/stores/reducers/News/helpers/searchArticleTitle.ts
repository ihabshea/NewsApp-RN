import {Article} from '../../../../types';

export default function searchArticleTitle(article: Article, term: string) {
  const formRegex = new RegExp('.*' + term.toLowerCase() + '.*');
  return article.title.toLowerCase().match(formRegex);
}
