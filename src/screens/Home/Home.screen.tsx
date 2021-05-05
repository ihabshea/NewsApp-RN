import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, StatusBar, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, connect} from 'react-redux';
import {loadNews} from '../../stores/actions/NewsActions/actions';
import {RootState} from '../../stores/reducers';
import {NewsReducerType} from '../../stores/reducers/News';
import {Article, RootStackParamList} from '../../types';
import NewsFeed from './Components/NewsFeed/NewsFeed';
import Search from './Components/Search/Search';
import styles from './Home.style';
interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  newsReducer: NewsReducerType;
}
const Home: React.FC<Props> = ({navigation, newsReducer}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNews());
  }, []);
  return (
    <>
      <SafeAreaView style={styles.mainSafeArea}>
        <Search />
        <NewsFeed newsReducer={newsReducer} navigation={navigation} />
      </SafeAreaView>
    </>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    newsReducer: state.newsReducer,
  };
};

export default connect(mapStateToProps, null)(Home);
