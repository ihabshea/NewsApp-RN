import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, connect} from 'react-redux';
import i18n from '../../i18n';
import {withI18n} from 'react-i18next';
import {changeLanguage} from '../../stores/actions/LanguageActions/actions';
import styles from './Settings.style';
import {RootState} from '../../stores/reducers';

const SettingsScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const switchToArabic = () => {
    dispatch(changeLanguage('ar'));
  };
  const switchToEnglish = () => {
    dispatch(changeLanguage('en'));
  };
  const isArabic = i18n.language === 'ar';
  return (
    <View style={isArabic ? styles.rtlSettings : styles.settings}>
      <Text style={styles.headingText}>{i18n.t('settings')}</Text>
      <Text style={styles.subHeadingText}>{i18n.t('language')}</Text>

      <TouchableOpacity
        style={isArabic ? styles.rtlOption : styles.option}
        onPress={switchToArabic}>
        <Text>العربية</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={isArabic ? styles.rtlOption : styles.option}
        onPress={switchToEnglish}>
        <Text>English</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    languageReducer: state.languageReducer,
  };
};
export default connect(mapStateToProps)(SettingsScreen);
