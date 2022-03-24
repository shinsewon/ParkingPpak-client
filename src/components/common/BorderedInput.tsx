import {palette} from '@/constant';
import React, {forwardRef, ForwardedRef} from 'react';
import {StyleSheet, Text, View, TextInput, TextInputProps} from 'react-native';

type BorderedInputProps = {
  errorMessage?: string;
  hasMarginBottom?: boolean;
};

const BorderedInput = forwardRef(
  (
    {
      errorMessage,
      hasMarginBottom = true,
      ...rest
    }: TextInputProps & BorderedInputProps,
    ref: ForwardedRef<TextInput>,
  ) => {
    return (
      <View
        style={[
          styles.block,
          hasMarginBottom && styles.marginBottom,
          !!errorMessage && styles.errorWrapper,
        ]}>
        <TextInput
          style={styles.input}
          ref={ref}
          {...rest}
          placeholderTextColor={palette.grey_5}
        />
        {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
      </View>
    );
  },
);

BorderedInput.displayName = 'BorderedInput';

const styles = StyleSheet.create({
  block: {
    height: 48,
    borderColor: palette.grey_6,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 20,
  },
  errorWrapper: {borderColor: palette.red_1, marginBottom: 40},
  marginBottom: {
    marginBottom: 25,
  },
  input: {
    height: 46,
    fontSize: 18,
    color: palette.grey_1,
  },
  error: {
    marginTop: 2,
    color: palette.red_1,
    marginLeft: -20,
  },
});

export default BorderedInput;
