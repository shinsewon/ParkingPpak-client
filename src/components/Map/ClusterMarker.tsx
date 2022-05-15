import React, {memo} from 'react';
import {Point, GeoJsonProperties} from 'geojson';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {LatLng, Marker} from 'react-native-maps';
import {returnMarkerStyle} from 'utils';

type ClusteredMarkerType = {
  point?: Point;
  properties?: GeoJsonProperties;
  onPress?: () => void;
  clusterColor?: string;
  clusterTextColor?: string;
  tracksViewChanges?: boolean;
};

const ClusteredMarker = ({
  properties,
  onPress,
  clusterColor,
  clusterTextColor,
  point,
  tracksViewChanges,
}: ClusteredMarkerType) => {
  const points: number = properties?.point_count;
  const {width, height, fontSize} = returnMarkerStyle(points);

  return (
    <Marker
      key={`${point?.coordinates[0]}_${point?.coordinates[1]}`}
      coordinate={
        {
          longitude: point?.coordinates[0],
          latitude: point?.coordinates[1],
        } as LatLng
      }
      style={{zIndex: points + 1}}
      onPress={onPress}
      tracksViewChanges={tracksViewChanges}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[
          styles.container,
          {
            width,
            height,
            backgroundColor: clusterColor,
            borderColor: clusterColor,
          },
        ]}>
        <Text
          style={[
            styles.text,
            {
              color: clusterTextColor,
              fontSize,
            },
          ]}>
          주유소({points})
        </Text>
      </TouchableOpacity>
    </Marker>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 4,
  },
  wrapper: {
    position: 'absolute',
    opacity: 0.5,
    zIndex: 0,
  },
  cluster: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  text: {
    fontWeight: 'bold',
  },
});

export default memo(ClusteredMarker);
