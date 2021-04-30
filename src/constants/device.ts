import {Dimensions, Platform} from 'react-native';

const iOS = Platform.OS === 'ios';
const windowInfo = Dimensions.get('window');
const {height, width} = windowInfo;
const aspectRatio = height / width;

let iPhoneX = false;
if (iOS) {
  if (height === 812 || width === 812 || height === 896 || width === 896) {
    iPhoneX = true;
  }
}

export default {
  aspectRatio,
  height,
  iOS,
  iPhoneX,
  width,
};
