import React from 'react';
import {Circle, LatLng} from 'react-native-maps';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {palette} from '@/constant';

type CenterMarkerType = {
  isFetching: boolean;
  center: LatLng;
};

function CenterMarker({isFetching, center}: CenterMarkerType) {
  return (
    <>
      <Icon name="plus" size={20} style={styles.markerFixed} />
      {isFetching && (
        <Circle
          center={center}
          radius={5000}
          fillColor={'rgba(44,152,251,0.3)'}
          strokeColor={palette.blue_1}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  markerFixed: {
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
});

export default CenterMarker;
