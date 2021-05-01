import React from 'react';
import {Text, View} from 'react-native';
import i18n from '../../../../i18n';
import styles from './styles';
const NoNews = () => {
  return (
    <View style={styles.noNewsArea}>
      <Text style={styles.noNews}>{i18n.t('noNews')} :(</Text>
    </View>
  );
};
export default NoNews;
