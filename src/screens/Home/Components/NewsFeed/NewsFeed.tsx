import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Article} from '../../../../types';
import styles from './styles';
import ArticleView from './ArticleView';
const NewsFeed = ({
  navigation,
  articles,
}: {
  navigation: any;
  articles: Article[];
}) => {
  const showArticle = ({item}: {item: Article}) => (
    <ArticleView navigation={navigation} article={item} />
  );

  return (
    <View style={styles.newsContainer}>
      <FlatList
        style={styles.newsScrollViewStyle}
        contentContainerStyle={styles.newsScrollView}
        data={articles}
        renderItem={showArticle}
        keyExtractor={article => article.title}
      />
    </View>
  );
};
export default NewsFeed;
