import {ImageSourcePropType} from 'react-native';

type ImagesType = {
  HDO: ImageSourcePropType;
  FRUGAL: ImageSourcePropType;
  GSC: ImageSourcePropType;
  MapMarker: ImageSourcePropType;
  RTX: ImageSourcePropType;
  RTO: ImageSourcePropType;
  NHO: ImageSourcePropType;
  ETC: ImageSourcePropType;
};

const images: ImagesType = {
  HDO: require('./image/hdo.png'),
  FRUGAL: require('./image/frugal.jpeg'),
  RTX: require('./image/frugal.jpeg'),
  RTO: require('./image/frugal.jpeg'),
  GSC: require('./image/gs.png'),
  MapMarker: require('./image/map_marker.png'),
  NHO: require('./image/nh.png'),
  ETC: require('./image/custom_image.png'), // 개인상호 주유소는 따로 우리만의 로고 이미지를 만들어서 적용해야 할듯합니다.
};

export default images;
