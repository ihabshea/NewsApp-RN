import axios from 'axios';
import {API_URL, API_KEY} from '@env';
import { NewsResponse, TopNewsFilter } from "../../types";

export default async function getTopHeadlines(filter: TopNewsFilter): Promise<() => NewsResponse> {
    const {country, category} =  filter;
    const url = category?
    `${API_URL}/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
    :`${API_URL}/v2/top-headlines?country=${country}&apiKey=${API_KEY}`;
    const response = await axios.get(url);
    // console.log(response)
    return response.data;
}