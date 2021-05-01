import {StyleSheet} from 'react-native';
import {device} from '../../../../constants';

export default StyleSheet.create({
  searchArea: {
    height: 0.1 * device.height,
    margin: 0,
    backgroundColor: '#95a5a6',
    width: device.width,
    padding: 0.05333333333 * device.width,
  },
  searchInput: {
    width: device.width,
    height: 0.05 * device.height,
  },
});
