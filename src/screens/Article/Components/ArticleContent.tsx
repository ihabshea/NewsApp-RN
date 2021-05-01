import React, {useEffect, useState} from 'react';
import {View, ImageBackground, Text, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
const ArticleContent = ({
  url,
  sourceName,
  content,
}: {
  url: string;
  sourceName: string;
  content: string;
}) => {
  const goToSite = () => Linking.openURL(url);
  return (
    <View style={styles.articleContent}>
      <Text style={styles.articleText}>{content}</Text>
      <TouchableOpacity onPress={goToSite} style={styles.readMoreButton}>
        <Text style={styles.readMoreText}>READ MORE on {sourceName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleContent;
