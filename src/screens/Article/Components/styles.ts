import {StyleSheet} from 'react-native';
import {device} from '../../../constants';
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
    articleHeader: {
      width: device.width,
      borderRadius: 20,
      height: device.height * 0.3,
    },
    mainActions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: device.width,
      paddingHorizontal: 0.0533333333 * device.width,
      height: 0.1 * device.height,
    },

    socialActions: {
      flexDirection: 'row',
      backgroundColor: '#c0392b',
      justifyContent: 'space-between',
      alignContent: 'center',

      paddingHorizontal: 0.133333333 * device.width,
      paddingVertical: 0.0246305419 * device.height,
      height: device.height * 0.14,
      borderRadius: 20,
    },
    socialIcon: {},
    articleImage: {
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    articleContent: {
      backgroundColor: backgroundColor[theme],
      position: 'relative',
      marginTop: -0.0666666667 * device.height,
      width: device.width,
      height: device.height * 0.8,
      zIndex: 9999,
      borderRadius: 30,
      paddingHorizontal: 0.128 * device.width,
      paddingVertical: 0.0426666667 * device.width,
    },
    readMoreButton: {
      backgroundColor: '#e74c3c',
      borderRadius: 20,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0.123152709 * device.height,
    },
    readMoreText: {
      color: '#FFF',
      fontWeight: '800',
    },
    articleText: {
      fontSize: 15,
      color: foregroundColor[theme],
      fontWeight: '500',
    },

    shadowLayer: {
      flexDirection: 'column-reverse',
      width: device.width,
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  });
}
