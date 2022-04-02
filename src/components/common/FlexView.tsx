import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  getMarginHorizontalStyle,
  getMarginVerticalStyle,
  getPaddingHorizontalStyle,
  getPaddingVerticalStyle,
  getFlexSetStyle,
} from 'utils';

function FlexView({
  flexDirection = 'row',
  children,
  style,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  flexWrap,
  flexSet = [],
  testBorder = false,
}: ComponentCssType) {
  return (
    <View
      style={[
        styles.flexView,
        {...getFlexSetStyle(flexSet)},
        {...getMarginHorizontalStyle(marginHorizontal)},
        {...getMarginVerticalStyle(marginVertical)},
        {...getPaddingVerticalStyle(paddingVertical)},
        {...getPaddingHorizontalStyle(paddingHorizontal)},
        {flexDirection, flexWrap, ...style},
        testBorder && {borderWidth: 1, borderColor: 'red'},
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  flexView: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
});

export default FlexView;
