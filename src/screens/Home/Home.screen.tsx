import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, connect } from 'react-redux';
import { loadNews } from '../../stores/actions/NewsActions/actions';
import { RootState } from '../../stores/reducers';
import { Article } from '../../types';
import styles from './Home.style';
const Home = ({navigation, articles}: {navigation: any, articles: Article[]}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadNews());
    },[])
    return (
        <ScrollView>
            {articles.map((article, index) => {
                return(
                    <View key={index}
                    >   
    <Text>
    {article.title}
    </Text>
                    </View>
                );
            })}
        </ScrollView>
    )
}
const mapStateToProps = (state:any) => {
    return {
        articles: state.newsReducer.articles
    }
}

export default connect(mapStateToProps, null)(Home)
