import React, {useEffect, useState} from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';
import ArticleActions from './ArticleActions';
import ArticleSocialActions from './ArticleSocialActions';
import ArticleInfo from './ArticleInfo';
const ArticleHeader = ({
  navigation,
  title,
  publishedAt,
  url,
  image,
}: {
  navigation: any;
  url: string;
  publishedAt: string;
  title: string;
  image: string;
}) => {
  const [background, setBackground] = useState({uri: image});

  const handleImageError = () => {
    setBackground(require('../../../assets/articles/defaultArticle.jpg'));
  };
  useEffect(() => {
    if (background.uri === null) {
      setBackground(require('../../../assets/articles/defaultArticle.jpg'));
    }
  }, []);
  return (
    <ImageBackground
      source={background}
      onError={handleImageError}
      imageStyle={styles.articleImage}
      style={styles.articleHeader}>
      <View style={styles.shadowLayer}>
        <ArticleSocialActions url={url} />
        <ArticleInfo title={title} publishedAt={publishedAt} />
        <ArticleActions navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default ArticleHeader;
