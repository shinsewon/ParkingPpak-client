import React from 'react';
import {Text} from 'react-native';

function TextComponent({
  children,
  style,
  fontSize = 12,
  fontWeight,
  lineHeight,
  color = '#1B1B21',
}: TextType) {
  return (
    <Text style={[{fontSize, fontWeight, lineHeight, color, ...style}]}>
      {children}
    </Text>
  );
}

export default TextComponent;
