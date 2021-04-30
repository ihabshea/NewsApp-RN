import React, {useEffect, useState} from 'react';
import {ImageBackground, View, Text} from 'react-native';
import {Article} from '../../../../types';
import styles from './styles';
const ArticleView = ({
  navigation,
  article,
}: {
  navigation: any;
  article: Article;
}) => {
  const [image, setImage] = useState({uri: article.urlToImage});
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
  return (
    <ImageBackground
      onError={handleImageFailure}
      imageStyle={styles.articleCover}
      style={styles.article}
      source={image}>
      <View style={styles.articleInfo}>
        <Text style={styles.articleTitle}>{article.title}</Text>
      </View>
    </ImageBackground>
  );
};
export default ArticleView;
