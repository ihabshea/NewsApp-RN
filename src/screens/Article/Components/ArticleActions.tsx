import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import makeStyleSheet from './styles';
import {RootState} from '../../../stores/reducers';
import {ThemeReducerType} from '../../../stores/reducers/Theme';
import styles from './styles';
import {RootStackParamList} from '../../../types';
import {StackNavigationProp} from '@react-navigation/stack';
interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Article'>;
  themeReducer: ThemeReducerType;
}
const ArticleActions: React.FC<Props> = ({navigation, themeReducer}) => {
  const styles = makeStyleSheet(themeReducer.theme);
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
const mapStateToProps = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapStateToProps)(ArticleActions);
