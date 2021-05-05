import React, {useState, useCallback, useEffect} from 'react';
import {View, RefreshControl, Text, FlatList} from 'react-native';
import {Article} from '../../../../types';
import getStyleSheet from './styles';
import ArticleView from './ArticleView';
import {connect, useDispatch} from 'react-redux';
import {loadNews} from '../../../../stores/actions/NewsActions/actions';
import {NewsReducerType} from '../../../../stores/reducers/News';
import NoNews from './NoNews';
import {ThemeReducerType} from '../../../../stores/reducers/Theme';
import {RootState} from '../../../../stores/reducers';
interface Props {
  navigation: any;
  newsReducer: NewsReducerType;
  themeReducer: ThemeReducerType;
}
const NewsFeed: React.FC<Props> = ({navigation, newsReducer, themeReducer}) => {
  const styles = getStyleSheet(themeReducer.theme);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const showArticle = ({item}: {item: Article}) => (
    <ArticleView navigation={navigation} article={item} />
  );
  const onRefresh = useCallback(async () => {
    if (!newsReducer?.filtered) {
      setRefreshing(true);
      dispatch(loadNews());
    }
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
      {newsReducer?.filtered ? (
        <>
          {newsReducer?.filtered.length > 0 ? (
            <FlatList
              refreshControl={newsRefresh()}
              style={styles.newsScrollViewStyle}
              contentContainerStyle={styles.newsScrollView}
              data={newsReducer?.filtered}
              renderItem={showArticle}
              keyExtractor={article => article.title}
            />
          ) : (
            <NoNews />
          )}
        </>
      ) : newsReducer?.articles ? (
        <FlatList
          refreshControl={newsRefresh()}
          style={styles.newsScrollViewStyle}
          contentContainerStyle={styles.newsScrollView}
          data={newsReducer?.articles}
          renderItem={showArticle}
          keyExtractor={article => article.title}
        />
      ) : (
        <NoNews />
      )}
    </View>
  );
};
const mapPropsToState = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapPropsToState)(NewsFeed);
