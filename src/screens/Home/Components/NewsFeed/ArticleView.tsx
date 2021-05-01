import React, {useEffect, useMemo, useState} from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {Article} from '../../../../types';
import {format} from 'date-fns';
import {TouchableOpacity} from 'react-native-gesture-handler';
import getStyleSheet from './styles';
import {connect} from 'react-redux';
import {RootState} from '../../../../stores/reducers';
import {ThemeReducerType} from '../../../../stores/reducers/Theme';
const ArticleView = ({
  navigation,
  article,
  themeReducer,
}: {
  navigation: any;
  article: Article;
  themeReducer: ThemeReducerType;
}) => {
  const [image, setImage] = useState({uri: article.urlToImage});
  const styles = getStyleSheet(themeReducer.theme);

  const formattedDate = useMemo(
    () => format(new Date(article.publishedAt), 'MMMM do, yyyy H:mma'),
    [article.publishedAt],
  );
  useEffect(() => {
    /*handle if there was no image url provided by API
    check the comment in handleImageFailure
    */
    if (!image.uri)
      setImage(require('../../../../assets/articles/defaultArticle.jpg'));
  }, []);
  const handleImageFailure = () => {
    //this is just a Stephen Colbert cover photo, pretty sure if it's a legit app, would use a cover photo with the app logo
    setImage(require('../../../../assets/articles/defaultArticle.jpg'));
  };
  const navigateToArticle = () => navigation.navigate('Article', {article});
  return (
    <TouchableOpacity onPress={navigateToArticle}>
      <ImageBackground
        onError={handleImageFailure}
        imageStyle={styles.articleCover}
        style={styles.article}
        source={image}>
        <View style={styles.articleInfo}>
          <Text style={styles.articleTitle}>{article.title}</Text>
          <Text style={styles.articleDate}>{formattedDate}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const mapPropsToState = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapPropsToState)(ArticleView);
