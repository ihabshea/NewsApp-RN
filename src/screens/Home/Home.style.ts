import {StyleSheet} from 'react-native';
import {device} from '../../constants';

export default StyleSheet.create({
  mainSafeArea: {
    flex: 1,
    height: device.height,
    width: device.width,
  },
});
