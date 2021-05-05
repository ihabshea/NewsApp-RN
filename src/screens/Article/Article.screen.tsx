import React from 'react';
import {SafeAreaView} from 'react-native';
import {Article, RootStackParamList} from '../../types';

import {withI18n} from 'react-i18next';
import ArticleContent from './Components/ArticleContent';
import ArticleHeader from './Components/ArticleHeader';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';
type ArticleScreenRouteProp = RouteProp<RootStackParamList, 'Article'>;
interface Props {
  route: ArticleScreenRouteProp;
  navigation: StackNavigationProp<RootStackParamList, 'Article'>;
}
const ArticleScreen: React.FC<Props> = ({route, navigation}) => {
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
