import {StyleSheet} from 'react-native';
import {device} from '../../../../constants';
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
    dark: 'rgba(255,255,255,0.4)',
    light: 'rgba(0,0,0,0.4)',
  };

  return StyleSheet.create({
    newsContainer: {
      flex: 1,
    },
    articleDate: {
      color: backgroundColor[theme],
      alignSelf: 'flex-start',
      fontSize: 12,
    },
    newsScrollViewStyle: {
      height: device.height,
      width: device.width,
      padding: 0,
    },
    articleInfo: {
      backgroundColor: wBackgroundColor[theme],
      height: 0.125 * device.height,
      justifyContent: 'center',
      width: device.width,
      paddingLeft: 0.1 * device.width,
    },
    noNewsArea: {
      width: device.width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    noNews: {
      color: foregroundColor[theme],
      fontWeight: '700',
      fontSize: 24,
    },
    articleTitle: {
      color: backgroundColor[theme],
      fontWeight: '700',
      fontSize: 14,
      width: 0.8 * device.width,
    },
    newsScrollView: {
      // flex: 1,
      flexDirection: 'column',
    },
    articleCover: {
      resizeMode: 'cover',
    },
    article: {
      // position: 'absolute',
      flexDirection: 'column-reverse',
      width: device.width,

      height: 0.25 * device.height,
    },
  });
}
