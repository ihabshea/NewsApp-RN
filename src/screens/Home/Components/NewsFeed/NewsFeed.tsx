import React, {useState, useCallback, useEffect} from 'react';
import {View, RefreshControl, Text, FlatList} from 'react-native';
import {Article} from '../../../../types';
import styles from './styles';
import ArticleView from './ArticleView';
import NewsRefresh from './NewsRefresh';
import {useDispatch} from 'react-redux';
import {loadNews} from '../../../../stores/actions/NewsActions/actions';
import {NewsReducerType} from '../../../../stores/reducers/News';

const NewsFeed = ({
  navigation,
  newsReducer,
}: {
  navigation: any;
  newsReducer: NewsReducerType;
}) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const showArticle = ({item}: {item: Article}) => (
    <ArticleView navigation={navigation} article={item} />
  );
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    dispatch(loadNews());
  }, []);
  useEffect(() => {
    if (newsReducer?.status === 'ok') {
      setRefreshing(false);
    }
  }, [newsReducer]);
  const newsRefresh = () => {
    return (
      <RefreshControl
        tintColor={'#000'}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    );
  };
  return (
    <View style={styles.newsContainer}>
      <FlatList
        refreshControl={newsRefresh()}
        style={styles.newsScrollViewStyle}
        contentContainerStyle={styles.newsScrollView}
        data={newsReducer?.articles}
        renderItem={showArticle}
        keyExtractor={article => article.title}
      />
    </View>
  );
};
export default NewsFeed;
