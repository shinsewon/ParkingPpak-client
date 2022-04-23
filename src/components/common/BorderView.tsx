import React from 'react';
import {View} from 'react-native';
import {
  getMarginHorizontalStyle,
  getMarginVerticalStyle,
  getPaddingHorizontalStyle,
  getPaddingVerticalStyle,
} from 'utils';

type BorderViewCssType = ComponentCssType & {
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
};

function BorderView({
  children,
  style,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  height = '100%',
  width = '100%',
  borderColor = 'black',
  borderWidth = 1,
  borderRadius,
}: BorderViewCssType) {
  return (
    <View
      style={[
        {width, height, borderColor, borderRadius, borderWidth, ...style},
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
