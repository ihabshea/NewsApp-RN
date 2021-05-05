import React from 'react';
import styles from './styles';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import createStyleSheet from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RootState} from '../../../stores/reducers';
import {connect} from 'react-redux';
import {ThemeReducerType} from '../../../stores/reducers/Theme';
interface Props {
  url: string;
  themeReducer: ThemeReducerType;
}
const ArticleSocialActions: React.FC<Props> = ({url, themeReducer}) => {
  const styles = createStyleSheet(themeReducer.theme);
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
const mapStateToProps = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapStateToProps)(ArticleSocialActions);
