import { NewsResponse, NewsAction } from "../../../types";
import { LOAD_NEWS } from "../../actions/NewsActions/actionTypes";

const initialState: NewsResponse = {
    status:"pending",
    totalResults:0,
    articles: []
}
const newsReducer = (state = initialState, action: NewsAction) => {
    const {news, type} = action;
    switch(type){
        case LOAD_NEWS:
            return news;
        default:
            return state;
    }
}
export default newsReducer;