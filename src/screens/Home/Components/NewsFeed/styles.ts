import {StyleSheet} from 'react-native';
import {device} from '../../../../constants';
export default StyleSheet.create({
  newsContainer: {
    flex: 1,
  },
  newsScrollViewStyle: {
    height: device.height,
    width: device.width,
    padding: 0,
  },
  articleInfo: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: 0.1 * device.height,
    justifyContent: 'center',
    alignItems: 'center',
    width: device.width,
  },
  articleTitle: {
    color: '#FFF',
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
