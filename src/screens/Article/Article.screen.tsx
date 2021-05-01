import React from 'react';
import {SafeAreaView} from 'react-native';
import {Article} from '../../types';
import styles from './Article.styles';
import ArticleContent from './Components/ArticleContent';
import ArticleHeader from './Components/ArticleHeader';
const ArticleScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {article}: {article: Article} = route.params;
  const {urlToImage: image, source, title, publishedAt, content, url} = article;
  const {name: sourceName} = source;
  return (
    <>
      <ArticleHeader
        navigation={navigation}
        url={url}
        publishedAt={publishedAt.toString()}
        image={image}
        title={title}
      />
      <ArticleContent sourceName={sourceName} url={url} content={content} />
    </>
  );
};
export default ArticleScreen;
