import React, {useEffect, useState} from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './styles';
import ArticleActions from './ArticleActions';
import ArticleSocialActions from './ArticleSocialActions';
import {connect} from 'react-redux';
import {RootState} from '../../../stores/reducers';
import {ThemeReducerType} from '../../../stores/reducers/Theme';
const ArticleInfo = ({
  title,
  publishedAt,
  themeReducer,
}: {
  title: string;
  publishedAt: string;
  themeReducer: ThemeReducerType;
}) => {
  return <></>;
};
const mapStateToProps = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapStateToProps)(ArticleInfo);
