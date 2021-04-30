import { Article } from "../../News";

export default interface NewsResponse{
    status: string;
    totalResults: number;
    articles: Article[]
}