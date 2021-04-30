import { NewsResponse } from "../APIResponse";

export default interface NewsAction{
    type: string;
    news?: NewsResponse
}