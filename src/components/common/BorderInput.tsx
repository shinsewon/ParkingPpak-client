import React, {forwardRef, ForwardedRef} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {palette} from '@constant/index';

interface IProps {
  hasMarginBottom?: boolean;
  [name: string]: any;
}

function BorderInput<T>(
  {hasMarginBottom = true, ...rest}: IProps,
  ref: ForwardedRef<TextInput>,
) {
  return (
    <TextInput
      ref={ref}
      style={[styles.input, hasMarginBottom && styles.margin]}
      {...rest}
    />
  );
}

BorderInput.displayName = 'BorderInput';
export default forwardRef(BorderInput);

const styles = StyleSheet.create({
  input: {
    borderColor: palette.grey_6,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 40,
    height: 60,
    fontSize: 18,
  },
  margin: {
    marginBottom: 16,
  },
});
