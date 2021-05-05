import React from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import i18n from '../../../../i18n';
import {RootState} from '../../../../stores/reducers';
import {ThemeReducerType} from '../../../../stores/reducers/Theme';
import getStyleSheet from './styles';
interface Props {
  themeReducer: ThemeReducerType;
}
const NoNews: React.FC<Props> = ({themeReducer}) => {
  const styles = getStyleSheet(themeReducer.theme);
  return (
    <View style={styles.noNewsArea}>
      <Text style={styles.noNews}>{i18n.t('noNews')} :(</Text>
    </View>
  );
};
const mapPropsToState = (state: RootState) => {
  return {
    themeReducer: state.themeReducer,
  };
};
export default connect(mapPropsToState)(NoNews);
