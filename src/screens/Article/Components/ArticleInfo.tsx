import React, {useEffect, useMemo, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import makeStyleSheet from './styles';
import ArticleActions from './ArticleActions';
import ArticleSocialActions from './ArticleSocialActions';
import {connect} from 'react-redux';
import {format} from 'date-fns';
import {RootState} from '../../../stores/reducers';
import {ThemeReducerType} from '../../../stores/reducers/Theme';
interface Props {
  title: string;
  author: string;
  source: string;
  publishedAt: string;
  themeReducer: ThemeReducerType;
}
const ArticleInfo: React.FC<Props> = ({
  title,
  author,
  source,
  publishedAt,
  themeReducer,
}) => {
  const formattedDate = useMemo(
    () => format(new Date(publishedAt), 'MMMM do, yyyy H:mma'),
    [publishedAt],
  );
  const styles = makeStyleSheet(themeReducer.theme);
  return (
    <View style={styles.articleInfo}>
      <Text style={styles.title}>{title}</Text>
      {author?.length < 50 && <Text style={styles.authorName}>{author}</Text>}
      <Text style={styles.sourceName}>
        {source} - {formattedDate}
      </Text>
    </View>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapStateToProps)(ArticleInfo);
