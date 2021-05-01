import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
const ArticleActions = ({navigation}: {navigation: any}) => {
  const navigateBack = () => navigation.goBack();
  return (
    <View style={styles.mainActions}>
      <TouchableOpacity onPress={navigateBack}>
        <FontAwesome name="chevron-left" color="#FFF" size={18} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome name="bookmark" color="#FFF" size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default ArticleActions;
