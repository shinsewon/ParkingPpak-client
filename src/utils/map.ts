import {Dimensions} from 'react-native';
import {BBox, GeoJsonProperties} from 'geojson';
import {PointFeature} from 'supercluster';
import GeoViewport from '@mapbox/geo-viewport';

const {width, height} = Dimensions.get('window');

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

export const isMarker = (child: JSX.Element): boolean =>
  child?.props?.coordinate && child.props.cluster !== false;

export const calculateBBox = (region: Region): BBox => {
  let lngD;
  if (region.longitudeDelta < 0) lngD = region.longitudeDelta + 360;
  else lngD = region.longitudeDelta;

  return [
    region.longitude - lngD, // westLng - min lng
    region.latitude - region.latitudeDelta, // southLat - min lat
    region.longitude + lngD, // eastLng - max lng
    region.latitude + region.latitudeDelta, // northLat - max lat
  ];
};

export const returnMapZoom = (region: Region, bBox: BBox, minZoom: number) => {
  const viewport =
    region.longitudeDelta >= 40
      ? {zoom: minZoom}
      : GeoViewport.viewport(bBox as [number, number, number, number], [
          width,
          height,
        ]);

  return viewport.zoom;
};

export const markerToGeoJSONFeature = (
  marker: JSX.Element,
  index: number,
): PointFeature<GeoJsonProperties> => {
  return {
    type: 'Feature',
    geometry: {
      coordinates: [
        marker.props.coordinate?.longitude,
        marker.props.coordinate?.latitude,
      ],
      type: 'Point',
    },
    properties: {
      point_count: 0,
      index,
      ..._removeChildrenFromProps(marker.props),
    },
  };
};

const _removeChildrenFromProps = (props: ViewPropertiesMarkerProps) => {
  const newProps = {
    coordinate: {latitude: 0, longitude: 0},
    stopPropagation: false,
  };
  const object = Object.keys(props) as Array<keyof ViewPropertiesMarkerProps>;

  object.forEach((key: keyof ViewPropertiesMarkerProps) => {
    if (key === 'stopPropagation') {
      newProps[key] = props[key];
    } else {
      newProps[key] = props[key];
    }
  });
  return newProps;
};

export const returnMarkerStyle = (
  points: number,
): {width: number; height: number; fontSize: number} => {
  if (points >= 4) {
    return {
      width: 70,
      height: 30,
      fontSize: 12,
    };
  }

  return {
    width: 80,
    height: 40,
    fontSize: 14,
  };
};
