import Source from "./Source";

export default interface Article{
    source: Source;
    title: string;
    author: string;
    description: string;
    url: string;
    urlToImage:string;
    publishedAt: Date;
    content: string;
}