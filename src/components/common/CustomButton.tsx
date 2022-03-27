import React from 'react';
import {palette} from '@constant/index';
import {StyleSheet, Pressable, PressableProps, Text} from 'react-native';

type ButtonColor = 'primary' | 'secondary';

type CustomButtonProps = PressableProps & {
  text: string;
  color?: ButtonColor;
};

export default function CustomButton({
  disabled,
  text,
  color = 'primary',
  ...rest
}: CustomButtonProps) {
  return (
    <Pressable
      style={[styles.button, buttonStyles(color, !!disabled).button]}
      disabled={disabled}
      {...rest}>
      <Text style={textStyles(color, !!disabled).text}>{text}</Text>
    </Pressable>
  );
}

const textStyles = (color: ButtonColor, disable?: boolean) =>
  StyleSheet.create({
    text: {
      fontSize: 20,
      textAlign: 'center',
      color:
        color === 'primary'
          ? 'white'
          : disable
          ? palette.grey_5
          : palette.blue_2,
    },
  });

const buttonStyles = (color: ButtonColor, disable?: boolean) =>
  StyleSheet.create({
    button:
      color === 'primary'
        ? {
            backgroundColor: disable ? palette.grey_5 : palette.blue_2,
          }
        : {
            borderColor: disable ? palette.grey_5 : palette.blue_2,
            borderWidth: 1,
            color: palette.blue_2,
          },
  });

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    height: 56,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
