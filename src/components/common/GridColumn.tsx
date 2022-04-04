import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useGetColumnGutter} from 'hooks';

function GridColumn({top = 0}: ComponentCssType) {
  const {colNumber, colWidth, width} = useGetColumnGutter();

  return (
    <View style={[styles.Box, {top}]}>
      <View style={styles.container}>
        <View style={[styles.row, {width}]}>
          {colNumber.map(col => (
            <View key={col} style={[styles.col, {width: colWidth}]} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: '100%',
    zIndex: 9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    borderColor: '#f9dae5',
    borderWidth: 1,
    backgroundColor: '#f9dae5',
  },
});

export default GridColumn;
