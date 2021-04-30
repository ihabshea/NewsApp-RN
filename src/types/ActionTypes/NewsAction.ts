import {NewsResponse} from '../APIResponse';
import {Article} from '../News';

export default interface NewsAction {
  type: string;
  news?: NewsResponse;
}
