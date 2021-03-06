import React, {useEffect, useState} from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';
import ArticleActions from './ArticleActions';
import ArticleSocialActions from './ArticleSocialActions';
import ArticleInfo from './ArticleInfo';
import {connect} from 'react-redux';
import makeStyleSheet from './styles';
import {RootState} from '../../../stores/reducers';
import {ThemeReducerType} from '../../../stores/reducers/Theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types';
interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Article'>;
  url: string;
  author: string;
  sourceName: string;
  publishedAt: string;
  title: string;
  image: string;
  themeReducer: ThemeReducerType;
}
interface ImageURI {
  uri: string;
}
const ArticleHeader: React.FC<Props> = ({
  navigation,
  title,
  publishedAt,
  url,
  author,
  sourceName,
  image,
  themeReducer,
}) => {
  const [background, setBackground] = useState<ImageURI>({uri: image});
  const styles = makeStyleSheet(themeReducer.theme);
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
        <ArticleInfo
          author={author}
          source={sourceName}
          title={title}
          publishedAt={publishedAt}
        />
        <ArticleActions navigation={navigation} />
      </View>
    </ImageBackground>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapStateToProps)(ArticleHeader);
