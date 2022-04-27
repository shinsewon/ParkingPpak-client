import {ImageSourcePropType} from 'react-native';

type ImagesType = {
  HDO: ImageSourcePropType;
  FRUGAL: ImageSourcePropType;
  GSC: ImageSourcePropType;
  MapMarker: ImageSourcePropType;
  RTX: ImageSourcePropType;
  RTO: ImageSourcePropType;
  NHO: ImageSourcePropType;
};

const images: ImagesType = {
  HDO: require('./image/hdo.png'),
  FRUGAL: require('./image/frugal.jpeg'),
  RTX: require('./image/frugal.jpeg'),
  RTO: require('./image/frugal.jpeg'),
  GSC: require('./image/gs.png'),
  MapMarker: require('./image/map_marker.png'),
  NHO: require('./image/nh.png'),
};

export default images;
