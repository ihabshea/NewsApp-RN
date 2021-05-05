import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch, connect} from 'react-redux';
import i18n from '../../i18n';
import {withI18n} from 'react-i18next';
import {changeLanguage} from '../../stores/actions/LanguageActions/actions';
import createStyleSheet from './Settings.style';
import {RootState} from '../../stores/reducers';
import {changeTheme} from '../../stores/actions/ThemeActions/actions';
import {ThemeReducerType} from '../../stores/reducers/Theme';

interface Props {
  themeReducer: ThemeReducerType;
}
const SettingsScreen: React.FC<Props> = ({themeReducer}) => {
  const styles = createStyleSheet(themeReducer.theme);
  const dispatch = useDispatch();
  const switchToArabic = () => {
    dispatch(changeLanguage('ar'));
  };
  const switchToEnglish = () => {
    dispatch(changeLanguage('en'));
  };
  const switchToLight = () => {
    dispatch(changeTheme('light'));
  };
  const switchToDark = () => {
    dispatch(changeTheme('dark'));
  };
  const isArabic = i18n.language === 'ar';
  return (
    <View style={isArabic ? styles.rtlSettings : styles.settings}>
      <Text style={styles.headingText}>{i18n.t('settings')}</Text>
      <Text style={styles.subHeadingText}>{i18n.t('language')}</Text>

      <TouchableOpacity
        style={isArabic ? styles.rtlOption : styles.option}
        onPress={switchToArabic}>
        <Text style={styles.optionText}>العربية</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={isArabic ? styles.rtlOption : styles.option}
        onPress={switchToEnglish}>
        <Text style={styles.optionText}>English</Text>
      </TouchableOpacity>
      <Text style={styles.subHeadingText}>{i18n.t('theme')}</Text>

      <TouchableOpacity
        style={isArabic ? styles.rtlOption : styles.option}
        onPress={switchToLight}>
        <Text style={styles.optionText}>{i18n.t('light')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={isArabic ? styles.rtlOption : styles.option}
        onPress={switchToDark}>
        <Text style={styles.optionText}>{i18n.t('dark')}</Text>
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = (state: RootState) => {
  return {
    languageReducer: state.languageReducer,
    themeReducer: state.themeReducer,
  };
};
export default connect(mapStateToProps)(SettingsScreen);
