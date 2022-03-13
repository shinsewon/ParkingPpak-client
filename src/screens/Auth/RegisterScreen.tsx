import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function RegisterScreen() {
  return (
    <View style={styles.block}>
      <Text>RegisterScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'red'},
});
