import {StyleSheet} from 'react-native';
import {device} from '../../constants';

export default StyleSheet.create({
  rtlSettings: {
    alignItems: 'flex-end',
    width: device.width,
    paddingHorizontal: 0.106666667 * device.width,
    paddingVertical: 0.0492610837 * device.height,
  },
  headingText: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 0.0123152709 * device.height,
  },
  option: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 20,
    marginBottom: 2,
  },
  rtlOption: {
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.1)',
    width: 0.85 * device.width,
    padding: 20,
    marginBottom: 2,
  },
  subHeadingText: {
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
