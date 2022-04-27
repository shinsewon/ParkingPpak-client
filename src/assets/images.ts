import {ImageSourcePropType} from 'react-native';

type ImagesType = {
  HDO: ImageSourcePropType;
  FRUGAL: ImageSourcePropType;
  GS: ImageSourcePropType;
};

const images: ImagesType = {
  HDO: require('./image/hdo.png'),
  FRUGAL: require('./image/frugal.jpeg'),
  GS: require('./image/gs.png'),
};

export default images;
