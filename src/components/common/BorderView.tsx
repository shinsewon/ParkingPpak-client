import React from 'react';
import {View} from 'react-native';
import {
  getMarginHorizontalStyle,
  getMarginVerticalStyle,
  getPaddingHorizontalStyle,
  getPaddingVerticalStyle,
} from 'utils';

function BorderView({
  children,
  style,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  height = '100%',
  width = '100%',
}: ComponentCssType) {
  return (
    <View
      style={[
        {width, height, ...style},
        {...getMarginHorizontalStyle(marginHorizontal)},
        {...getMarginVerticalStyle(marginVertical)},
        {...getPaddingVerticalStyle(paddingVertical)},
        {...getPaddingHorizontalStyle(paddingHorizontal)},
      ]}>
      {children}
    </View>
  );
}

export default BorderView;
