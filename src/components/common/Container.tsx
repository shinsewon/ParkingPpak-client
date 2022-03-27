import React from 'react';
import {palette} from '@constant/index';
import {View, StyleSheet, ViewStyle} from 'react-native';

type ContainerProps = {
  children: Element;
  style?: ViewStyle;
};

export default function Container({children, style}: ContainerProps) {
  return <View style={[styles.wrapper, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: palette.white,
    borderRadius: 10,
    shadowColor: '#6D6D6D',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
  },
});
