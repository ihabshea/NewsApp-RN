import {StyleSheet} from 'react-native';
import {device} from '../../constants';
export default function getStyleSheet(theme: string) {
  let foregroundColor = {
    dark: '#FFF',
    light: '#000',
  };
  let backgroundColor = {
    dark: '#000',
    light: '#FFF',
  };
  let wBackgroundColor = {
    dark: 'rgba(255,255,255,0.1)',
    light: 'rgba(0,0,0,0.1)',
  };

  return StyleSheet.create({
    rtlSettings: {
      alignItems: 'flex-end',
      width: device.width,
      paddingHorizontal: 0.106666667 * device.width,
      paddingVertical: 0.0492610837 * device.height,
    },
    headingText: {
      fontSize: 24,
      fontWeight: '700',
      color: foregroundColor[theme],
      marginBottom: 0.0123152709 * device.height,
    },
    option: {
      backgroundColor: wBackgroundColor[theme],
      padding: 20,
      marginBottom: 2,
    },
    rtlOption: {
      alignItems: 'flex-end',
      backgroundColor: wBackgroundColor[theme],
      width: 0.85 * device.width,
      padding: 20,
      marginBottom: 2,
    },
    optionText: {
      color: foregroundColor[theme],
    },
    subHeadingText: {
      color: foregroundColor[theme],
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 0.0123152709 * device.height,
    },
    settings: {
      width: device.width,
      paddingHorizontal: 0.106666667 * device.width,
      paddingVertical: 0.0492610837 * device.height,
    },
    mainSafeArea: {
      flex: 1,
      height: device.height,
      width: device.width,
    },
  });
}
