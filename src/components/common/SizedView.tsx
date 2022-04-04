import React from 'react';
import {View} from 'react-native';
import {useGetColumnGutter} from 'hooks';
import {
  getMarginHorizontalStyle,
  getMarginVerticalStyle,
  getPaddingHorizontalStyle,
  getPaddingVerticalStyle,
} from 'utils';

function SizedView({
  children,
  style,
  marginHorizontal,
  marginVertical,
  paddingHorizontal,
  paddingVertical,
  Gutter = 0,
  Col = 0,
  height = '100%',
  width = '100%',
  testBorder = false,
}: ComponentCssType) {
  const {colWidth, gutter} = useGetColumnGutter();
  let componentWidth = null;
  if (Gutter === 0 && Col === 0) {
    componentWidth = width;
  } else {
    componentWidth = Math.floor(Gutter * gutter + Col * colWidth);
  }

  return (
    <View
      style={[
        {width: componentWidth, height},
        {...style},
        {...getMarginHorizontalStyle(marginHorizontal)},
        {...getMarginVerticalStyle(marginVertical)},
        {...getPaddingVerticalStyle(paddingVertical)},
        {...getPaddingHorizontalStyle(paddingHorizontal)},
        testBorder && {borderWidth: 1, borderColor: 'red'},
      ]}>
      {children}
    </View>
  );
}

export default SizedView;
