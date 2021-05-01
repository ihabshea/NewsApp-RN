import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {TouchableOpacity} from 'react-native-gesture-handler';
const ArticleSocialActions = ({url}: {url: string}) => {
  return (
    <View style={styles.socialActions}>
      <TouchableOpacity style={styles.socialIcon}>
        <FontAwesome name="twitter" size={18} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialIcon}>
        <FontAwesome name="facebook" size={18} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialIcon}>
        <FontAwesome name="linkedin" size={18} color="#FFF" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialIcon}>
        <FontAwesome name="envelope" size={18} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default ArticleSocialActions;
