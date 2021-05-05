import React, {useEffect, useState} from 'react';
import {View, ImageBackground, Text, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import i18n from '../../../i18n';
import makeStyleSheet from './styles';
import {ThemeReducerType} from '../../../stores/reducers/Theme';
import {connect} from 'react-redux';
import {RootState} from '../../../stores/reducers';
interface Props {
  url: string;
  sourceName: string;
  content: string;
  themeReducer: ThemeReducerType;
}
const ArticleContent: React.FC<Props> = ({
  url,
  sourceName,
  content,
  themeReducer,
}) => {
  const goToSite = () => Linking.openURL(url);
  const styles = makeStyleSheet(themeReducer.theme);
  return (
    <View style={styles.articleContent}>
      <Text style={styles.articleText}>{content}</Text>
      <TouchableOpacity onPress={goToSite} style={styles.readMoreButton}>
        <Text style={styles.readMoreText}>
          {i18n.t('readMoreOn')} {sourceName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapStateToProps)(ArticleContent);
