import React from 'react';
import {palette} from '@constant/index';
import {StyleSheet, ViewStyle, Pressable} from 'react-native';

type ContainerProps = {
  children: Element;
  style?: ViewStyle;
  onPress?: () => void;
};

export default function Container({children, style, onPress}: ContainerProps) {
  return (
    <Pressable style={[styles.wrapper, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
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
