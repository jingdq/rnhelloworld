import  {NativeModules} from 'react-native';
var rnToastAndroid = NativeModules.RNToastAndroid;

rnToastAndroid.show('Hello Toast of native', rnToastAndroid.SHORT);

