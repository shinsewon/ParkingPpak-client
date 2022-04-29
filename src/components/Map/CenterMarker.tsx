import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';

function CenterMarker() {
  return <Icon name="plus" size={20} style={styles.markerFixed} />;
}

const styles = StyleSheet.create({
  markerFixed: {
    left: '50%',
    top: '50%',
    position: 'absolute',
  },
});

export default CenterMarker;
