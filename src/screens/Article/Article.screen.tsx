import React from 'react';
import {SafeAreaView} from 'react-native';
import {Article} from '../../types';
import styles from './Article.style';
import {withI18n} from 'react-i18next';
import ArticleContent from './Components/ArticleContent';
import ArticleHeader from './Components/ArticleHeader';

const ArticleScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {article}: {article: Article} = route.params;
  const {
    urlToImage: image,
    source,
    author,
    title,
    publishedAt,
    content,
    url,
  } = article;
  const {name: sourceName} = source;
  return (
    <SafeAreaView>
      <ArticleHeader
        navigation={navigation}
        url={url}
        sourceName={sourceName}
        author={author}
        publishedAt={publishedAt.toString()}
        image={image}
        title={title}
      />
      <ArticleContent sourceName={sourceName} url={url} content={content} />
    </SafeAreaView>
  );
};
export default withI18n()(ArticleScreen);
