import {Article} from '../News';

type RootStackParamList = {
  Home: undefined;
  Article: {article: Article};
  Settings: undefined;
};

export default RootStackParamList;
