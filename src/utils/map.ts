import {Dimensions} from 'react-native';

export const getZoomFromRegion = (region: Region): number => {
  return Math.round(Math.log(360 / region.longitudeDelta) / Math.LN2);
};

export const getRegionForZoom = (
  lat: number,
  lon: number,
  zoom: number,
): Region => {
  const distanceDelta = Math.exp(Math.log(360) - zoom * Math.LN2);
  const {width, height} = Dimensions.get('window');
  const aspectRatio = width / height;
  return {
    latitude: lat,
    longitude: lon,
    latitudeDelta: distanceDelta * aspectRatio,
    longitudeDelta: distanceDelta,
  };
};
